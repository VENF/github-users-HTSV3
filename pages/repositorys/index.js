import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { Repositorys, Layout } from "components"
import { useUser } from "hooks"
import { CircularProgress } from "@material-ui/core"

export default function RepositorysPage() {
  const { state } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (state === "unauthorized") router.push("/login")
  }, [state])

  return (
    <>
      <Head>
        <title> V3 | Repositorys </title>
      </Head>
      {state === "authorized" && (
        <Layout>
          <Repositorys />
        </Layout>
      )}
      {state === "loading" && (
        <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
          <CircularProgress color="primary" />
        </div>
      )}
    </>
  )
}
