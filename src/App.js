import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], // data from api
      isLoaded: false, // if data is loaded from the api
    };
  }
  componentDidMount() {
    fetch('https://api.covid19api.com/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
    });
  }
  render() {
    this.state = [
      { name: "S", age: "12", address: "Shoubra Misr" },
      { name: "H", age: "73", address: "Shoubra Misr" },
      { name: "S", age: "74", address: "Shoubra Misr" },
    ];
    let {isLoaded,items} = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }else{
      return (
        <div className="container">
          <Navbar />
          {this.state.map((userInfo) => {
            return (
              <div>
                <h1>{userInfo.name}</h1>
                <span>{userInfo.age}</span>
              </div>
            );
          })}
        </div>
      );
    }
   
  }
}
export default App;
