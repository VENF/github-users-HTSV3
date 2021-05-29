import { useState, useEffect } from "react"
import { Light } from "themes"

export const useTheme = () => {
  const [theme, setTheme] = useState(Light)
  useEffect(() => {
    setTheme(Light)
  }, [])
  return {
    theme
  }
}
