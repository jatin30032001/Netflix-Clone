import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"

const App = () => {
  const user = true;
  return (
    
    <Router>
       <Routes>
         <Route exact path="/" element ={ user ? <Home/> :<Register/>}/>
         
         <Route exact path="/register" element ={!user ? <Register/> :<Home/>}/>
         <Route exact path="/login" element ={!user ? <Login/> :<Home/>}/>

         {
          user && (<>
            <Route exact path="/movies" element ={<Home type="movies"/>}/>
            <Route exact path="/series" element ={<Home type="series"/>}/>
            <Route exact path="/watch" element ={<Watch/>}/>
          </>
          )
         }
       </Routes>
    </Router>






  );
};

export default App;