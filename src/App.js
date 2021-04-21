import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import Navbar from './components/Navbar';
function App() {
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
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <h1 className="title">My Repositories</h1>
        <div className="repo-container">
          <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>
      </div>
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
