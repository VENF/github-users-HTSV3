import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "grid",
    placeItems: "center",
  },
  container: {
    height: "90%",
    width: "768px",
    "@media (max-width: 450px)": {
      width: "90%",
      height: "100%",
    }
  },
  containerLogin:{
    height: "90%",
    width: "450px",
    display: "grid",
    placeItems: "center",
    "@media (max-width: 450px)": {
      width: "90%",
      height: "100%",
    }
  },
})
