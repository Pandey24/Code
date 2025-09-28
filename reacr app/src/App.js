import logo from './logo.svg';
import './App.css';
import './components/Create'
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './components/Read';
import Edit from './components/Edit';
import Child from './components/Child';
import Parent from './components/Parent';
import Child2 from './components/Child2';
import MyContext from './components/MyContext';
function App() {
  return (
    <div className='row'>
       <h4> My First React App </h4>
       <hr></hr>
       <br></br>
       <MyContext.Provider value={<Parent />} >    
         <BrowserRouter>
      <Routes>
           <Route path="/" element={<Parent/>}></Route>
        
    <Route path="/child" element={<Parent />} />
    <Route path="/child/:Id" element={<Parent />} /> 

         <Route path="/create" element={<Create />}></Route>
         <Route path="/read" element={<Read/>}></Route>
       <Route path="/edit" element={<Edit/>}></Route>
        </Routes>
    </BrowserRouter>
     </MyContext.Provider>
    </div>
  );
}

export default App;
