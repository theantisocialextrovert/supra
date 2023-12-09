//import logo from './logo.svg';
import './App.css';
import './FirstPage.css'
import FirstPage from './first_page';
import SecondPage from './secondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import {useState} from 'react';


function App() {
  const [count, setCount] = useState(0)
function handleClick() {
  setCount((count + 1)%4);
}
  return (
    <body>
      {count === 0 && <FirstPage/>}
      {count === 1 && <SecondPage/>}
      {count === 2 && <FourthPage/>}
      {count === 3 && <ThirdPage/>}
      
      <button class="button-33" onClick={() => {handleClick();}}>click me baby</button>
    </body>
  );
}

export default App;
