import '../App.css';
import { SepDot } from './Misc.js'

export function Footer() {
    return (
        <footer className="Footer">
            <div id="footer-about">Built with &#10084;&#65039; using React JS &amp; Bootstrap 5 </div>
            <div id="deploy">
                Deployed using Azure Static Web Apps <SepDot />&#160;
                    <a href="https://github.com/Ti1mmy/personal-website" target="_blank" rel="noopener noreferrer">
                        Github Repo
                    </a>
            </div>
            <div id="copyright">
                Copyright &copy; Timothy Zheng {(new Date().getFullYear())}
            </div>
        </footer>
    )
}