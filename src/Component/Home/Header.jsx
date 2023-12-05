import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import TypedTitle from "./TypedName";


export default function Header() {






  return  <>
<div className='row justify-content-start'>
 <div className='header w-100  mt-5 ms-5'>
 <div className=' ms-5 h-25'>
    <TypedTitle/>
  </div>
  <div className="about ms-5 mt-3">
  <p className="text-color">I’m Front-end development student based in Damascus, Syria passionate about cutting-edge, pixel-perfect,<br/>
beautiful interfaces and intuitively implemented UX</p>
<p className="mt-4 text-color">Working with my hands to make magic happen on the internet. View
 
 <Link className="badge view  text-black text-decoration-none ms-2" to="/projects">Projects</Link> , 
 <a className="badge view  text-black text-decoration-none ms-2" href="/Resume">Resume</a> , 
 <a className="badge view  text-black text-decoration-none ms-2" href="/Contact">Contact</a> 
</p>

<div  className="arrwwo">
<p className="Lets Continue To Projects text-color">Lets Continue To Projects <Link className="text-color" to="/projects"><i class="fa-solid fa-arrow-right fa-beat-fade fa-lg mt-5 ms-3"></i></Link></p>
</div>
  </div>
    <div className="social ms-5 mt-5">
      <SocialMedia/>
    </div>
 </div>
</div>
    </>
  
}
