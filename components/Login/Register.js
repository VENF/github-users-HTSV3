import { useState } from "react"
import { Layout } from "components"
import { TextField, Typography, CircularProgress } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"
import { useRouter } from "next/router"
import Link from "next/link"
// styles
import { useStyles } from "./style"

export const Register = () => {
  const { control, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      const db = window.localStorage.getItem("users");
      const users = JSON.parse(db);
      if(!users) {
        window.localStorage.setItem("users", JSON.stringify([data]))
        router.push("/repositorys")
      } else {
        users.push(data)
        window.localStorage.setItem("users", JSON.stringify(users))
        router.push("/repositorys")
      }
    }, 2000);
  }
  const { root, grid, flow, btn, link } = useStyles()
  return (
    <Layout login={true}>
      <form onSubmit={handleSubmit(onSubmit)} className={root}>
        <div className={flow}>
          <Typography variant="h4">Registro</Typography>
        </div>
        <div className={grid}>
          <div>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Nombre"
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Apellido"
                />
              )}
            />
          </div>
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
          <div style={{ display: "grid", placeItems: "center", margin: "1rem 0rem" }}>
            <CircularProgress color="primary" />
          </div>
        ) : (
          <input className={btn} type="submit" />
        )}
        <div className={link}>
          <Link href="/login">¿ Ya tienes una cuenta ?</Link>
        </div>
      </form>
    </Layout>
  )
}
