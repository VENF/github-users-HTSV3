import { Card, Typography, CardContent, Avatar, Chip } from "@material-ui/core"

export const ProfileCard = ({ name, avatar, repos }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={avatar} size="small" />
          <div>
            <Typography
              style={{ margin: "0rem 1rem" }}
              variant="body1"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
             style={{ margin: "0rem 1rem" }}
              variant="body1"
              gutterBottom
            >
              Repositorios : {<Chip size="small" color="primary" label={repos} />}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
