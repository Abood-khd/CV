import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assist/383396321_1227161735339779_6867182766095228000_n.jpg'
import SocialMedia from '../Home/SocialMedia'

export default function Resume() {
  return (
    <>
<p className="mt-4 text-color">Reach out to me via my 
 
 <Link className="badge view  text-black text-decoration-none ms-2" to="/contact">Contact</Link> page, 
 <a className="badge view  text-black text-decoration-none ms-2" href="/">view</a> or 
 <a className="badge view  text-black text-decoration-none ms-2" href="/">Download</a> 
 the resume
</p>

<div className='resume  d-flex flex-column overflow-hidden p-5 border border-5 shadow-lg mt-5'>

<div className='  col-md-10 mt-2 d-flex  align-items-center overflow-hidden  mt-5'>
  <div className='col-md-3 '>
  <img src={img} className='w-100  border border-3 border-dark  rounded-circle' alt=""/>
  </div>
  <div className='col-md-10 d-flex flex-column detalis-my'>
  <h1 className='ms-5 fa-4x text-black-50 fw-light d-flex '>Abdulrahman  <span className='ms-1 text-black fa-1x fw-bolder'>Khd</span></h1> 
  <p className='ms-5 text-info fw-bold'>WEB DEVELOPER</p>
  <p className='ms-5 text-muted fw-bold '>Damascus,Syria</p>
  <div className='col-md-8  ms-5 d-flex justify-content-between detalis-my'>
    <p className='text-muted phone'><i className='fa fa-phone'></i> +963 951332060</p>
    <p className='text-muted email me-5'><i className='fa fa-message'></i> abdurahman.kadem@gmail.com</p>
  </div>
  </div>
</div>


<div className='col-md-10 d-flex flex-column'>
<div className='summary ms-5 mt-5 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='d-flex fw-bolder'><h3 className='text-info'>Sum</h3>mary</h3>
  <hr className='col-md-11 ms-2' />
</div>
<div className='text-summary ms-4 col-md-10'>
  <h5 className='text-muted'>
  Frontend Developer
  </h5>
  <p className='text-black-50'>
Passionate about crafting seamless digital experiences, I am a dedicated Front-End Developer with a
strong focus on React.js and Next.js. I've had the privilege of translating intricate design concepts into
user-friendly interfaces that not only captivate but also engage users. My proficiency in creating dynamic
and responsive web applications has allowed me to contribute to the digital landscape in meaningful
ways.</p>
</div>


</div>






<div className='col-md-10 d-flex flex-column'>
<div className='summary ms-5 mt-3 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='d-flex fw-bolder'><h3 className='text-info'>Ski</h3>lls</h3>
  <hr className='col-md-12 ms-1' />
</div>
<div className='text-skills ms-4 col-md-10'>
  <p className='text-muted small'>
  I HAVE GENERAL SOFTWARE ENGINEERING SKILLS LIKE: OOP, SOLID PRINCIPLES, DEPENDENCY INJECTION, GENERICS, AND MORE.
  </p>
  <p className='text-black fw-bold'>Web
  <p className='text-black-50'>React.js, and next.js</p>
  </p>
  <ul className='ul-work col-md-8 d-flex flex-column gap-2'>
    <li className='text-black'>React.js: Proficient in building user interfaces using React.js, understanding React components, state management, and lifecycle methods.</li>
    <li className='text-black'>Next.js: Experience in building server-side rendered (SSR) and static websites using Next.js, understanding routing, data fetching, and server-side rendering concepts.</li>
    <li className='text-black'>JavaScript: Strong knowledge of JavaScript and its modern features, understanding ES6 syntax, arrow functions, destructuring, and async/await.
</li>
    <li className='text-black'>HTML/CSS: Proficient in writing semantic HTML markup and styling with CSS, understanding CSS preprocessors like Tailwend and bootstrap.
</li>
    <li className='text-black'>Responsive Design: Ability to create responsive web designs that adapt to different screen sizes and devices.
</li>
    <li className='text-black'>Redux-Toolket: Familiarity with Redux for state management, understanding actions, reducers, and the Redux store.
</li>
    <li className='text-black'>API Integration: Experience in integrating with RESTful APIs or GraphQL, understanding how to make HTTP requests and handle responses.
</li>
    <li className='text-black'>Git: Proficient in using Git for version control, understanding branching, merging, and resolving conflicts.
</li>
    <li className='text-black'>UI/UX Design: Basic understanding of UI/UX design principles, ability to work with design tools like Figma or Sketch, and collaborate with designers.
</li>
  </ul>
</div>


</div>





<div className=' col-md-10 d-flex flex-column'>
<div className='Work-Experience ms-5 mt-5 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='Work-title d-flex fw-bolder ms-5'><h3 className='text-info ms-5 px-1 Work-title'>Work  </h3>  Experience</h3>
  <hr className='col-md-11 ' />
</div>
<div className='work-flex d-flex justify-content-between col-md-12 ms-3'>
<div className='title-job-Work text-start col-md-6'>

<h6 className='ms-4 fw-bolder'>Smart Soft</h6>
<div className='detalis-work'>

<p className='text-start ms-4'>worked on the development and maintaining several admin
panels. </p>
<p className='text-start ms-4'>- Cademy: microservices-based app for a driving school. my
primary responsibility was to write unit testing for UI
components </p>
<p className='text-start ms-4'>- FlexERP: ERP system for managing small to medium
companies. my primary responsibility was fixing bugs and
developing renewal components for the system subscription</p>
<p className='text-start ms-4'>- Fashionality: an e-commerce app that has two applications
one for the client and one for admin,  my primary
responsibility was to make adjustments and enhancements
on the client application.</p>
</div>
</div>
<div className='date-job-Experience col-md-6 text-end'>
<p className='text-info date-job-Experience'>Damascus-syria</p>
<p>Sep,2022</p>
</div>
</div>






</div>







<div className='col-md-10 d-flex flex-column'>
<div className='summary ms-5 mt-5 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='d-flex fw-bolder ms-3'><h3 className='text-info'>lan</h3>guages
</h3>
  <hr className='col-md-11 ms-2' />
</div>

<ul className='ms-3 d-flex flex-column'>
  <li className='fw-bold'>
    English   <i className='fa fa-star-half-alt'> <i className='fa fa-star-half-stroke'> <i className='fa fa-star-half-stroke'></i></i></i>   
  </li>
  <li className='fw-bold'>
    Arabic   <i className='fa fa-star-half-alt'> <i className='fa fa-star-half-stroke'>  </i>
    <i className='fa fa-star-half-stroke'></i>
    <i className='fa fa-star-half-stroke'></i>
    <i className='fa fa-star-half-stroke'></i>
    </i>   
  </li>
</ul>

</div>




<div className='col-md-10 d-flex flex-column'>
<div className='summary ms-5 mt-5 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='d-flex fw-bolder ms-3'><h3 className='text-info'>Edu</h3>cation</h3>
  <hr className='col-md-11 ms-2' />
</div>

<h5 className='ms-4 fw-bold'>Syrian Virtual University</h5>
<p className='ms-4 text-muted fw-light'>BACHELOR’S DEGREE, COMPUTER SCIENCE</p>
<h5 className='ms-4 fw-bold'>Damascus University</h5>
<p className='ms-4 text-muted fw-light'>ASSOCIATE’S DEGREE, COMPUTER SOFTWARE ENGINEERING</p>
<li className='list-unstyled ms-4 fw-light'>• Built a simple clinic management system, group of 3 students.
</li>


</div>



<div className='col-md-10 d-flex flex-column'>
<div className='summary ms-5  mt-5 col-md-10 d-flex justify-content-center align-items-center'>
  <h3 className='d-flex fw-bolder'><h3 className='text-info'>Int</h3>rests</h3>
  <hr className='col-md-11 ms-2' />
</div>

<div className='ms-5'>
  <p>
  Software Engineering, Space, Mobile Applications.
  </p>
  <p>
  Football, Swimming, Gaming.

  </p>
  <p>
  Music, Tv Shows, Cooking

  </p>
</div>

</div>

<div className='footer ms-5 d-flex justify-content-between mt-5 pt-4 col-md-7'>
  <div>
  <p className='text-muted footer-date'>APRIL 12, 2023</p>

  </div>
  <div>
    <p className='text-muted footer-text'>Abdurahman Khadema aljamaeh · RÉSUMÉ</p>
  </div>
</div>

</div>















<div  className="arrwwo mt-5">
<p className="Lets Continue To Projects text-color">Are you convinced to contact me now? <Link className="text-color" to="/contact"><i class="fa-solid fa-arrow-right fa-beat-fade fa-lg mt-5 ms-3"></i></Link></p>
<SocialMedia/>
</div>

    </>
  )
}
