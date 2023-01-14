
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'; 

import Bollywood from './Pages/Bollywood'; 
import Fitness from './Pages/Fitness'; 
import Food from './Pages/Food'; 
import Hollywood from './Pages/Hollywood'; 
import Technology from './Pages/Technology'; 
import Newpage from './Pages/Newpage'; 



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Bollywood' element={<Bollywood/>} />
        <Route path='/Fitness' element={<Fitness/>} />
        <Route path='/Food' element={<Food/>} />
        <Route path='/Hollywood' element={<Hollywood/>} />
        <Route path='/Technology' element={<Technology/>} />
        <Route path='/Newpage' element={<Newpage/>} />
    </Routes>
    </BrowserRouter>

</>   
  );
}

export default App;
