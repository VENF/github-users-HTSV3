import { Card, Typography, CardContent, CardActions } from "@material-ui/core"

export const RepositoryCard = ({ title, url, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <a
          style={{ paddingLeft: ".5rem", color: "#5F48D5", textDecoration: "none" }}
          rel="noreferrer"
          target="_blank"
          href={url}
        >
          Ir al Proyecto
        </a>
      </CardActions>
    </Card>
  )
}
