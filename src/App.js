/* eslint-disable no-undef */
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

import LayOut from "./Component/LayOut/LayOut";
import HomePages from "./Component/Home/HomePages";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Resume from "./Component/Resume/Resume";


const routes = createHashRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { index: true, element: <HomePages /> },
      { path: "/homepages", element: <HomePages /> },
      { path: "/projects", element: <Projects /> },
      {path:'/contact' , element:   <Contact />},
      {path:'/resume' , element:   <Resume />},


      // {path: "*",element:<ErrorPage/>},
    ],
  },
]);










function App() {
  return (
    <>
       <RouterProvider router={routes}>

        <>
          <ToastContainer
            position="bottom-center"
            autoClose="true"
            theme="dark"
            />
        </>

            </RouterProvider>;
 

    </>
  );
}

export default App;
