import { useState } from 'react';
import './App.css';
import GetImage from './components/FetchAPI/fetchapi';
import { UsernameForm } from './components/username';
import Navbar from './components/Navbar';
import Story from './components/story';


 const App = () => {
   const [user, setUser] = useState();
   const [username, setUsername] = useState();
   const  sumbitHandler = (e) =>{
     e.preventDefault();
     setUsername(user)
   }
  return (
      <div className='full'>
    <nav classname="nav">
      <Navbar />

      </nav>

      <div className='storydiv'>
        <Story />
      </div>

<div  className="App">
     <GetImage/>
</div>


    </div>
  );
}

export default App;
