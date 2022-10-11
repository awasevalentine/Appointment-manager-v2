import { Link } from "react-router-dom";
import NavSection from "../../components/header/header";
import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineCreate, MdCircleNotifications, MdMonitor } from 'react-icons/md'
import { RiCalendarTodoFill } from 'react-icons/ri'
import './home.css'
import { benefitOffers, benefits } from "../../../services/static-data";
import Footer from "../../components/footer/footer";

const HomePage =()=>{


    return (
        <>
        <NavSection />
        <div id="intro-wrapper">
            <section className="intro">
                <div className="intro-description">
                    <div class="intro-description-content">
                        <h1 class="display-6">Appointment Manager</h1>
                        <p className="text-centert intro-text">
                            Get those appointments or tasks sorted out and well managed.
                            Set reminder, track their progress, and get notified.
                        </p>
                        <Link class="get-started" to='/'>Get Started 
                            <BsArrowRightShort class="fs-4 arrow-heartbeat" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        <section className="calendar-section">
            <div className="text-center mt-5">
                Have those <span class="text-warning">Appointments or Tasks</span> monitored. 
                <p>Don't miss any!</p>
            </div>
            <div className="benefits-main-wrapper">
                <span className="benefits-icons">
                    <RiCalendarTodoFill className="fs-3" />
                </span>
                <hr className="benefits-hr"/>
                <span className="benefits-icons">
                    <MdMonitor className="fs-3" />
                </span>
                <hr className="benefits-hr"/>
                <span className="benefits-icons">
                    <MdCircleNotifications className="fs-3" />
                </span>
            </div>
            <div className="content d-none d-md-flex">
                <span><p className="benefits-content">Create appointments or tasks</p></span>
                <span><p className="benefits-content">Track status of task or Appointment</p></span>
                <span><p className="benefits-content">Get notified</p></span>
            </div>
            <div className="benefits-mobile-content d-md-none">
                <span><p className="benefits-content">Appointments</p></span>
                <span><p className="benefits-content">Track status</p></span>
                <span><p className="benefits-content">Get notified</p></span>
            </div>
            <div  className="calendar-image">
                {/* <img src={require('../../../assets/home_page/section2.jpeg')} alt="Calendar"/> */}
            </div>
        </section>
        <section className="offers-wrapper">
            <div className="offer-header-wrapper">
                <div></div>
                <h3 class="text-center offer-header">
                    <span className="text-warning fs-5">~⨀ </span>
                        The Benefits
                    <span className="text-warning fs-5"> ⨀~</span>
                </h3>
                <div></div>
            </div>
            <div class="offer-content">
                <div className="row">
                    {
                        benefitOffers.map((res)=>(
                            <div className="col-sm-12 col-md-4 col-lg-3" style={{margin:'6px'}}>
                                <div className="card h-100" style={{margin:'8px'}}>
                                    <img src={res.image} class="card-img-top" alt="Appointment" />
                                    <h4 className="card-title mt-3">{res.name}</h4>
                                    <p className="card-body">
                                        {res.description}
                                    </p>
                                </div>
                            </div>
                        ))
                 
                    }

                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default HomePage