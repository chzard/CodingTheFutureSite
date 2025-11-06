import * as links from "../lib/Links.js"
import * as components from "../lib/Components.js"
export default function Navbar() {
    return (
        <nav className = "navbar">
            <div className = "nav-left">
                <a href = "/">
                    <img alt = "CTF logo" className = "logo" src = "src/assets/icons/logo.jpeg" />
                </a>
            </div>
            <div className = "nav-center">
                <ul>
                    <li>Home</li> {/*TODO*/}
                    <li>About Our Program</li> {/*TODO*/}
                    <li>Our Team</li> {/*TODO*/}
                </ul>
            </div>
            <div className = "nav-right">
                <ul>
                    <li>
                        {/*<a target="_blank" rel="noopener noreferrer" href = {links.classSignUpLink}>Sign up for lessons!</a>*/}
                        <components.LinkButton innerText = "Lessons sign up" linkTo = {links.classSignUpLink} className = "navbutton"/>
                    </li>
                    <li>
                        {/*<a target="_blank" rel="noopener noreferrer" href = {links.tutorSignUpLink}>Become a tutor!</a>*/}
                        <components.LinkButton innerText = "Tutor sign up" linkTo = {links.tutorSignUpLink} className = "navbutton"/>
                    </li>
                </ul>
               </div>
        </nav>
    );
}