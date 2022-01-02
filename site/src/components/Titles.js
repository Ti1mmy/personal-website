import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

import { EmailButton } from "./EmailButton"
import { GithubIcon, LinkedinIcon, TwitterIcon } from './IconsSocials';

export function MyName() {
    return (
        <h1 className="MyName">
            Timothy Zheng
        </h1>
    )
}

export function ContactWidgets() {

    return (
        <div className='ContactWidgets'>
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
            {/* <EmailButton /> */}
        </div>
    )
}