import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Layout } from "components"
import { TextField, Typography, CircularProgress } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
// styles
import { useStyles } from "./style"

export const Login = () => {
  const { control, handleSubmit } = useForm()
  const router = useRouter()
  const [errors, setErrors] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    setTimeout(() => {
      const db = window.localStorage.getItem("users")
      const users = JSON.parse(db)
      if(!users){
        setErrors("Rgistrese antes de continuar")
        setLoading(false)
      } else {
        const user = users.filter((x) => x.email === data.email)
        if (user.length === 0) {
          setErrors("Usuario no encontrado")
          setLoading(false)
        } else {
          if (user[0].password === data.password) {
            window.localStorage.setItem("user", JSON.stringify(data))
            router.push("/repositorys")
          } else {
            setErrors("Contraseña incorrecta")
            setLoading(false)
          }
        }
      }
    }, 2000)
  }

  const { root, grid, flow, btn, link } = useStyles()
  return (
    <Layout login={true}>
      <form onSubmit={handleSubmit(onSubmit)} className={root}>
        <div className={flow}>
          <Typography variant="h4">Iniciar sesión</Typography>
        </div>
        <div>
          {errors ? (
            <Typography
              align="center"
              color="error"
              style={{ margin: "1rem 0rem" }}
              variant="body2"
            >
              {errors}
            </Typography>
          ) : null}
        </div>
        <div className={grid}>
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  type="email"
                  label="Email"
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  type="password"
                  label="Password"
                />
              )}
            />
          </div>
        </div>
        {loading ? (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              margin: "1rem 0rem",
            }}
          >
            <CircularProgress color="primary" />
          </div>
        ) : (
          <input className={btn} type="submit" />
        )}
        <div className={link}>
          <Link href="/register">¿ Aun no te has registrado ?</Link>
        </div>
      </form>
    </Layout>
  )
}
