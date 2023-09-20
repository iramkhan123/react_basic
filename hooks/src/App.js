
import './App.css';
import Us from './Component/Us';

import { useState } from 'react';

import NavBar from './Component/NavBar';
import Parent1 from './Component/Parent1';
import Parent2 from './Component/Parent2';
import context from './Component/Context'

function App() {
  const [theme,setTheme]=useState(false);
  return (
   <context.Provider value={theme}>
    <button onClick={()=>setTheme(!theme)}>change Theme</button>
   <NavBar/>
   <Parent1/>
   <Parent2/>

   </context.Provider>

  );
}

export default App;
