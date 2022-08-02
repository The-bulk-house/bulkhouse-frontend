import React from "react"
import "../Styles/home.css"
import bodybuilder from "../Images/bodybuilder.webp";

const Home = () => {
      return (
        <body>
          <div>
            <div class="img-container">
              <img class="heroimg" src={bodybuilder} alt="bulk" />
            </div>
          </div>
        </body>
       
      );
  }
  
  export default Home;