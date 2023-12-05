/* eslint-disable no-undef */
import { ToastContainer } from "react-toastify";
import Router from "./Component/Router/Router";
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <>

<HashRouter> 
        <Router />
        <>
          <ToastContainer
            position="bottom-center"
            autoClose="true"
            theme="dark"
            />
        </>
        </HashRouter>

 

    </>
  );
}

export default App;
