import { Link } from "react-router-dom";
import NavSection from "../../components/header/header";
import { BsArrowRightShort } from 'react-icons/bs'
import './home.css'

const HomePage =()=>{


    return (
        <>
        <NavSection />
        <div id="home-wrapper">
            <section className="intro">
            <h1 class="display-6">Appointment Manager</h1>
            <p className="text-centert intro-text">
                Get those appointments sorted out and well managed.
                Set reminder, track their progress, and get notified.
            </p>
            <Link class="get-started" to='/'>Get Started <BsArrowRightShort class="fs-4 arrow-heartbeat" /></Link>
            </section>
        </div>
        </>
    )
}

export default HomePage