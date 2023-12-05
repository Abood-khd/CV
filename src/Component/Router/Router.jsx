import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import LayOut from '../LayOut/LayOut';
import HomePages from '../Home/HomePages';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

export default function Router() {

  const routes = createHashRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <HomePages /> },
        { path: "Cv/#/homepages", element: <HomePages /> },
        { path: "Cv/#/projects", element: <Projects /> },
        {path:'Cv/#/contact' , element:   <Contact />},
        {path:'Cv/#/resume' , element:   <Resume />},


        // {path: "*",element:<ErrorPage/>},
      ],
    },
  ]);


  return (
    <>
    <div className="dark-mood">

       <RouterProvider router={routes}></RouterProvider>;
    </div>
    </>
  )
}
