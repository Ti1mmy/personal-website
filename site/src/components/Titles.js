import '../App.css';

import { EmailButton } from "./EmailButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from './IconsSocials';

export function MyName() {
    return (
        <h1 className="MyName">
            Timothy Zheng
        </h1>
    )
};

export function ContactWidgets() {

    return (
        <div className='ContactWidgets'>
            <GithubIcon />
            <LinkedinIcon />
            <TwitterIcon />
            <EmailButton />
        </div>
    )
};

export function Program() {
    return (
        <div className="MyProgram">
            <div>
            3B <a id="program-link" href="https://uwaterloo.ca/computing-financial-management/" target="_blank" rel="noopener noreferrer">
                Computing and Financial Management Student
            </a> 
            </div>
            <> @ The University of Waterloo </>
        </div>
    )
}
