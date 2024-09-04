import React from "react";
import kisses from "./kisses.gif";
import "./Asking.css"

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif-success" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      You're my princess, my bestfriend, i love you so much❤️.
    </p>
    <p className="App-text-success">
      Thank you! for choosing me baby!❤️
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">11/09/2024</p>
  </div>
);

export default Success;
