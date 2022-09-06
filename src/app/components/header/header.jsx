import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const NavSection = () => {

    const [isLoggedIn, setIsLoggedIn ] = useState(false);

    return ( 
        <nav class="navbar navbar-expand-lg bg-dark" style={{height: '80px'}}>
        <div class="container-fluid">
          <button class="navbar-toggler bg-#FAF3E3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className='brand'>
            <a class="brand-name text-center" href="/">Home</a>
          </div>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">New Appointment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Notifications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">About</a>
              </li>
            </ul>
            <div className="auth-wrapper">
                {
                    isLoggedIn ? (
                        <> Me</>
                    ):
                    (
                        <>
                        <span className='signin'>
                            <Link to='/register' class="signup" >Sign Up</Link>
                        </span>
                        <span className='signin'>
                            <Link to='/login' class="login">Login</Link>
                        </span>
                        </>
                    )
                }

            </div>
          </div>
        </div>
      </nav>
     );
}
 
export default NavSection;