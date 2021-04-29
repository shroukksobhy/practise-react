import React, { useEffect, useState } from "react";
import "./App.css";

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
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";
import "react-circular-progressbar/dist/styles.css";
import { Route, Link } from 'react-router-dom';
import Repo from './Repo';
import Page2 from './Page2';
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Route exact path="/repo" component={Repo} />
      <Route exact path="/page2" component={Page2} />

      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Helo My Guest</Typography>
          <Link to='/repo'>Repo</Link>
          <Link to='/page2'>Page 2</Link>

        </Toolbar>
      </AppBar>

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
