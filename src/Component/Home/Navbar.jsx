import { Link } from "react-router-dom";


export default function Navbar() /Cv/#{


 

  return (
    <>
      <nav className='   navbar navbar-expand-lg p-4  navbar'>
        <div className="container-fluid ">
          <Link className="navbar-brand fs-1 position-relative" to="/Cv/#/">
            𝓐k
            <span className="fa-2xs point position-absolute  ">
              <i class="ms-1   fa-solid fa-circle fa-fade text-dark  fa-2xs"></i>

            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto gap-3 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link nav-mood active"
                  aria-current="page"
                  to="/projects"
                >
                  Projects
                  <span className="lin"></span>

                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cv/#/resume">
                  Resume
                </Link>
                <span className="lin"></span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cv/#/contact">
                  Contact
                </Link>
                <span className="lin"></span>

              </li>
           






            


   
              {/* <li className="nav-item mt-2 ">
                <i className="  ms-5 fa-solid fa-circle fa-fade text-dark"></i>
              </li> */}


       











            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
