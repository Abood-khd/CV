/* eslint-disable no-undef */
import { ToastContainer } from "react-toastify";
import Router from "./Component/Router/Router";
function App() {
  return (
    <>


        <Router />
        <>
          <ToastContainer
            position="bottom-center"
            autoClose="true"
            theme="dark"
            />
        </>

 

    </>
  );
}

export default App;
