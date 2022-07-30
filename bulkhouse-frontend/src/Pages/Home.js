import React from "react"
import "../Styles/home.css"
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import Profile from "../Components/Profile";

const Home = () => {
      return (
        <body>
          <div className="div">
            <h1 className="word">Home page</h1>
            <div>
            <LoginButton/>
            <LogoutButton/>
            </div>
            <div className="div">
            <Profile/>
            </div>
          </div>
        </body>
       
      );
  }
  
  export default Home;