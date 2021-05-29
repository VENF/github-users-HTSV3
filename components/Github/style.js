import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
  root: {
    border: "1px solid red"
  },
  field: {
    padding: ".5rem 1rem"
  },
  repos: {
    padding: ".5rem 1rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px"
  }
})
