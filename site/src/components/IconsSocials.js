import { Github, Linkedin, Twitter } from 'react-bootstrap-icons'
import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

export function GithubIcon() {
    return (
        <a id="social-icon" href="https://github.com/Ti1mmy" target="_blank">
            <Github />
        </a>
    )
}


export function LinkedinIcon() {
    return (
        <a id="social-icon" href="http://www.linkedin.com/in/Timothy-Zheng21" target="_blank">
            <Linkedin />
        </a>
    )
}

export function TwitterIcon() {
    return (
        <a id="social-icon" href="https://twitter.com/intent/user?screen_name=Ti1mmyy" target="_blank">
            <Twitter />
        </a>
    )
}