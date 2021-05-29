import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "10px",
    marginTop: "1rem",
    "& svg": {
      fill: "red",
    },
  },
  flow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0rem",
  },
  info: {
    padding: "0rem .5rem",
    display: "inline",
  },
  btn: {
    border: "none",
    width: "100%",
    height: "35px",
    borderRadius: "5px",
    marginTop: "1rem",
    textTransform: "uppercase",
    color: "#FFF",
    background: theme.palette.primary.main,
    cursor: "pointer",
    transition: "all ease .3s",
    outline: "none",
    "&:hover": {
      background: theme.palette.primary.dark,
      transform: "translateY(-5px)",
    },
  },
  link: {
    margin: "1rem 0rem",
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      transition: "all ease .3s",
      display: "inline-block",
      "&:hover": {
        color: theme.palette.primary.dark,
        transform: "translateY(-5px)",
      },
    },
  },
}))
