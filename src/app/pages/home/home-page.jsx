import { Link } from "react-router-dom";
import NavSection from "../../components/header/header";
import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineCreate, MdCircleNotifications, MdMonitor } from 'react-icons/md'
import { RiCalendarTodoFill } from 'react-icons/ri'
import './home.css'
import { benefits } from "../../../services/static-data";

const HomePage =()=>{

    const benefit = benefits.map((res)=>{

        if(res.name == 'New Appointment'){
             return <div>
                    <div className="d-flex">
                        <span className="benefits-icons">
                            <RiCalendarTodoFill className="fs-3" />
                        </span>
                        <hr className="benefits-hr"/>
                    </div>
                    <p className="benefits-content">Create those appointments and task</p>
                    </div>
        }
        if(res.name == 'Track Status'){
            return <div>
                    <div className="d-flex">
                        <span className="benefits-icons">
                            <MdMonitor className="fs-3" />
                        </span>
                        <hr className="benefits-hr"/>
                    </div>
                    <p className="benefits-content">Create those appointments and task</p>
                    </div>
        }
        if(res.name == 'Get Notified'){
            return <div>
                    <div className="d-flex">
                        <span className="benefits-icons">
                            <MdCircleNotifications className="fs-3" />
                        </span>
                    </div>
                    <p className="benefits-content">Create those appointments and task</p>
                    </div>
        }
    }

    )


    return (
        <>
        <NavSection />
        <div id="intro-wrapper">
            <section className="intro mobile-view">
                <div className="intro-description">
                    <h1 class="display-6">Appointment Manager</h1>
                    <p className="text-centert intro-text">
                        Get those appointments or tasks sorted out and well managed.
                        Set reminder, track their progress, and get notified.
                    </p>
                    <Link class="get-started" to='/'>Get Started 
                        <BsArrowRightShort class="fs-4 arrow-heartbeat" />
                    </Link>
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
            <div className="content">
                <span><p className="benefits-content">Create those appointments and task</p></span>
                <span><p className="benefits-content">Create those appointments and task</p></span>
                <span><p className="benefits-content">Create those appointments and task</p></span>
            </div>
            <div  className="calendar-image">
                {/* <img src={require('../../../assets/home_page/section2.jpeg')} alt="Calendar"/> */}
            </div>
        </section>
        </>
    )
}

export default HomePage