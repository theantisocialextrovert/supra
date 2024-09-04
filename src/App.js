//import logo from './logo.svg';
import './App.css';
import './FirstPage.css'
import FirstPage from './first_page';
import SecondPage from './secondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Asking from './Asking';
import Success from './Success'
import {useState} from 'react';

import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";



function App() {
  const [count, setCount] = useState(0)
function handleClick() {
  setCount((count + 1)%5);
}
// State to track acceptance and rejection
const [accepted, setAccepted] = useState(false);
const [rejected, setRejected] = useState(false);
const [noButtonText, setNoButtonText] = useState("No");
const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

// Handler for accepting the proposal
const handleAccept = () => {
  setAccepted(true);
};

// Handler for rejecting the proposal
const handleReject = () => {
  setRejected(true);
  // Array of rejection messages
  const rejectionTexts = [
    "Are you sure?",
    "Don't break my heart",
    "Plessssss :(",
    "Ek baar soch lo",
    "Harpic pi lenge!",
  ];
  // Randomly select a rejection message
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * rejectionTexts.length);
  } while (randomIndex === lastRejectedIndex);

  setLastRejectedIndex(randomIndex);
  setNoButtonText(rejectionTexts[randomIndex]);
};
  return (
    <body>
      {count === 0 && <FirstPage/>}
      {count === 1 && <SecondPage/>}
      {count === 2 && <FourthPage/>}
      {count === 3 && <ThirdPage/>}
      {count === 4 && !accepted && <Asking
        gif={rejected ? madBear : flowerBear}
        altText={rejected ? "Rejected Bear" : "I love you Bear"}
        handleAccept={handleAccept}
        handleReject={handleReject}
        noButtonText={noButtonText}
      />}
      
      {/* She said YES! */}
      {accepted && <Success />}

      {count!= 4 && <button class="button-33" onClick={() => {handleClick();}}>click me baby</button>}
    </body>
  );
}

export default App;
