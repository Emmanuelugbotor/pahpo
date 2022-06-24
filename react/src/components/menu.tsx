import { Link } from "react-router-dom"

export const MenuItems =()=>{
    return (
        <nav>
            <ul className="navigation">
                <li className="list__item">
                    <a href="/">Home</a>
                </li>
                <li className="list__item">
                    <a href="/"> Affiliate Programs</a>
                </li>
                <li className="list__item">
                    <a href="/services">Services</a>
                </li>
                <li className="list__item">
                    <a href="#">CourseMed</a>
                </li>
                <li className="list__item">
                    <a href="#">Conference</a>
                </li>
                <li className="list__item">
                    <a href="#">Donate</a>
                </li>
             
                <li className="list__item">
                    <a href="#">Features</a>
                    <ol className="dropdown">
                        <li>Events</li>
                        <li>Gallery</li>
                        <li>Blog</li>
                        <li>Adverts</li>
                    </ol>
                </li>
                <li className="list__item">
                    <a href="#">Partners</a>
                    <ol className="dropdown">
                        <li>Local</li>
                        <li>International</li>
                    </ol>
                </li>
                <li className="list__item">
                    <a href="#">Contact Us</a>
                    <ol className="dropdown">
                        <li>Headquaters</li>
                        <li>Regional Directors</li>
                        <li>Country Directors</li>
                    </ol>
                </li>
            </ul>
            <div className="contact_us">
                <a href="/login">

                <button  className="btn join">
                    Login
                </button>
                </a>
           </div>
        </nav>
    )
}