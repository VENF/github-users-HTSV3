// styles
import { useStyles } from "./styles"

const Layout = ({ children, login = false }) => {
  const { root, container, containerLogin } = useStyles()
  return (
    <div className={root}>
      <div className={login ? containerLogin : container}>{children}</div>
    </div>
  )
}

export default Layout
