import React from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SecurityIcon from "@material-ui/icons/Security";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    backgroundImage: "url(/background.jpeg)",
    backgroundPosition: "80%",
    backgroundSize: "cover",
    display: "flex",
    flexFlow: "column",
    height: "100vh",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    margin: "0 20px",
    padding: "60px 140px",
    textAlign: "center",
  },
  element: {
    margin: 14,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={24}>
        <div style={{ margin: 8 }}>
          <SecurityIcon color="primary" fontSize="large" />
        </div>
        <Typography
          className={classes.element}
          style={{ fontWeight: 700 }}
          variant="h5"
        >
          Authentication Page
        </Typography>
        <TextField
          className={classes.element}
          label="Name"
          required
          variant="outlined"
        />
        <TextField
          className={classes.element}
          label="Password"
          required
          type="password"
          variant="outlined"
        />
        <Button
          className={classes.element}
          color="primary"
          size="large"
          variant="contained"
        >
          <strong>GO !</strong>
        </Button>
      </Paper>
    </div>
  );
}

export default App;
