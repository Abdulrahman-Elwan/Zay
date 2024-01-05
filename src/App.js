import React , {useState , useEffect  } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import About from './AboutPage/About'
import Home from './HomePage/Home'
// stayle page
import "./App.css";
// react spinners
import { MoonLoader } from 'react-spinners';
import Navigation from './NavPage/Navigation';
const App = () => {
  const [loading , setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <BrowserRouter>
    {loading ?
      <div className="seLoader">
        <MoonLoader size={"70"} color={"#02721a"} loading={loading} height={800} margin={10} />
      </div> :
      <>
      <Navigation />
      <Routes>
      <Route path='/' element ={<Home />} />
      </Routes>
      </>
    }   
    </BrowserRouter>
  )
}

export default App
