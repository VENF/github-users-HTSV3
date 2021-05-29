import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { Login } from "components"
import { useUser } from "hooks"
import { CircularProgress } from "@material-ui/core"

export default function LoginPage() {
  const { state } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (state === "authorized") router.push("/repositorys")
  }, [state])

  return (
    <>
      <Head>
        <title> V3 | Login </title>
      </Head>
      {state === "unauthorized" && <Login />}
      {state === "loading" && (
        <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <CircularProgress color="primary" />
        </div>
      )}
    </>
  )
}
