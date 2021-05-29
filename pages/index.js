import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { useUser } from "hooks"
import { CircularProgress } from "@material-ui/core"
export default function Home() {
  const { state } = useUser()
  const router = useRouter()

  useEffect(() => {
    if(state === "unauthorized") router.push("/login")
    if(state === "authorized") router.push("/repositorys")
  }, [state])

  return (
    <>
      <Head>
        <title> V3 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <CircularProgress color="primary" />
      </div>
    </>
  )
}
