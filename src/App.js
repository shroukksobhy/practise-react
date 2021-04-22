import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import Navbar from "./components/Navbar";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function App() {
  const classes = useStyles();
  const value = 66;

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/users/shroukksobhy/repos`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Hi Roka</Typography>
        </Toolbar>
      </AppBar>
      <Navbar />
      <div className={classes.container}>
        <h1 className="title">My Repositories</h1>
        <div className="repo-container">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          style={{ marginTop: "100px" }}
        >
          My Repositories
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="outlined" color="primary">
              Primary
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} md={4} sm={6}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}></CardMedia>
                <CardContent className={classes.cardContent}>
                  <Grid container>
                    <Grid item>
                      <Typography style={{ width: 50, height: 50 }}>
                        Content Designer
                      </Typography>
                    </Grid>
                    <Grid item>
                      <CircularProgressbar value={value} text={`${value}%`} />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          ;
        </Grid>
      </Container>
    </div>
  );
}
export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import React, { useEffect, useState } from 'react'
// import Navbar from "./components/Navbar";
// import List from './components/List';
// import withListLoading from './components/withListLoading';

// }
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: {}, // data from api
//       isLoaded: false, // if data is loaded from the api
//     };
//   }
//   componentDidMount() {
//     fetch("https://api.github.com/users/shroukksobhy")
//       .then((response) => response.json())
//       .then((data) => console.log("This is your data", data))
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     const { isLoaded, items } = this.state;
//     if (!isLoaded) {
//       return (
//         <div><Navbar/>Loading...</div>
//       );
//     } else {
//       return (
//         <div className="container">
//           Data has been loaded
//           <ul>
//             {items.map((item) => (
//               <li key={item.Country}>{item.Country}</li>
//             ))}
//             ;
//           </ul>
//           <Navbar />
//         </div>
//       );
//     }
//   }
// }
// export default App;
