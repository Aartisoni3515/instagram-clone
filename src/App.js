import "./App.css";
import Home from "./Components/HomePage/Home";
import LoginPage from "./Components/LoginPage/LoginPage";
// import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <>
     {/* {
          (localStorage.getItem("users")===undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <Home/>
      } */}
      <Home/>
      {/* <LoginPage/> */}
    </>
  );
}

export default App;
