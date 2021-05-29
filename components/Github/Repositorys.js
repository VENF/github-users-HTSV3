import { useState } from "react"
import { useRouter } from "next/router"
import { useForm, Controller } from "react-hook-form"
import { getRepositorys, getProfile } from "services"
// components
import {
  Grid,
  TextField,
  InputAdornment,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core"
import { IconProfile, RepositoryCard, ProfileCard } from "components"
// styles
import { useStyles } from "./style"

export const Repositorys = () => {
  const router = useRouter()
  const { field, repos } = useStyles()
  const { control, handleSubmit } = useForm()

  const [repositorys, setRepositorys] = useState([])
  const [errors, setErrors] = useState("")
  const [profile, setProfile] = useState("init")
  const [loading, setLoading] = useState(false)

  const logout = () => {
    window.localStorage.removeItem("user")
    router.push("/login")
  }

  const onSubmit = async (data) => {
    if (data.username === "") {
      setErrors("No puedes enviar el campo vacio")
    } else {
      setLoading(true)
      getRepositorys(data.username)
        .then((res) => {
          if (!res.ok) {
            setErrors(res.errorMessage)
            setRepositorys([])
            setProfile("init")
          }
          if (res.ok === undefined) {
            getProfile(data.username).then((profiledata) => {
              setRepositorys(res)
              setProfile(profiledata)
              setLoading(false)
            })
          }
        })
        .cath((err) => console.log(err))
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "1rem",
          }}
        >
          <Button
            onClick={logout}
            variant="contained"
            color="primary"
            size="small"
          >
            Cerrar Sesion
          </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography
          style={{ paddingLeft: "1rem" }}
          variant="body2"
          color="error"
        >
          {errors}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={field}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Ingrese su user de github"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconProfile width="20px" color="#5F48D5" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </form>
      </Grid>
      {profile !== "init" ? (
        <Grid item xs={12}>
          <div style={{ padding: ".5rem 1rem" }}>
            <ProfileCard
              name={profile.name}
              avatar={profile.avatar_url}
              repos={profile.public_repos}
            />
          </div>
        </Grid>
      ) : null}
      {loading ? (
        <Grid item xs={12}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              margin: "1rem 0rem",
            }}
          >
            <CircularProgress color="primary" />
          </div>
        </Grid>
      ) : null}
      {!loading ? (
        <Grid item xs={12}>
          <div className={repos}>
            {repositorys.map((repo) => (
              <RepositoryCard
                key={repo.id}
                title={repo.full_name}
                description={repo.description}
                url={repo.html_url}
              />
            ))}
          </div>
        </Grid>
      ) : null}
    </Grid>
  )
}
