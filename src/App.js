import './App.css';
import React from 'react'
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm';
import { BrowserRouter as  Router, Routes , Route, BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path='/SignupForm' element={<SignupForm/>}/>
           
          
        </Routes>
     
     {/* <SignupForm/> */}
     <LoginForm/>
    </div>
    </BrowserRouter>
  );
}

export default App;
