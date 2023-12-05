import React from "react";
import { data } from "./ProjectData";
import { Link } from "react-router-dom";
import SocialMedia from "../Home/SocialMedia";
export default function Projects() {
  return (
    <>
      <div className="ms-5 mt-5">
        <h1 className=" mt-5 fw-bold">Projects</h1>
      </div>

      <div className="row  overflow-hidden justify-content-center g-1">


      {data.map((pro)=><>
      
        <div  key={pro.id} className="vedio-h   col-md-5 mt-4 ms-5">
        <Link to={pro.url} target="_blanck" >

          <div className="video ">
            <video className="videos w-100 " height="350px" autoPlay={true} onMouseOver={(event) => event.target.play()} onMouseOut={(event) => event.target.pause()} muted={true} src={pro.src}
            ></video>
            <div className="skills p-3 ">
              <h3 className=" text-white mt-5">{pro.title}</h3>

              {pro.tools.map((tool)=>  
              <span className="badge text-white bg-secondary mt-5 ms-2">
                {tool}  
              </span>
              )}
          
            
            
            </div>
          </div>
        </Link>
        </div>

      </> )}


     
      <div  className="arrwwo mt-5 ms-5">
<p className="Lets Continue To Projects text-color mt-5">Lets go to my resume. <Link className="text-color" to="/resume"><i class="fa-solid fa-arrow-right fa-beat-fade fa-lg mt-5 ms-3"></i></Link></p>
<SocialMedia/>
</div>
      
     
      </div>

    </>
  );
}
