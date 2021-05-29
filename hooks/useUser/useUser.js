import { useState, useEffect } from "react"

export const useUser = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    state: "loading"
  })

  useEffect(() => {
    const fetch = window.localStorage.getItem("user")
    if(!fetch) {
      setUser({
        ...user,
        state: "unauthorized"
      })
    } else {
      const data = JSON.parse(fetch)
      setUser({
        ...data,
        state: "authorized"
      })
    }

   
  }, [])

  return {
    ...user,
  }
}
