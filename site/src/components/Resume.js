import { SepDot } from "./Misc.js";

import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { FileEarmarkPdfFill, FileEarmarkZipFill } from 'react-bootstrap-icons';

import '../bootstrap/css/bootstrap.min.css';
import '../App.min.css';


export function DownloadButtons() {
    return (
        <div className="DownloadButtons">
            <ResumeButton />
            <LatexButton />
        </div>
    )
};

function ResumeButton() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div className="ResumeButton">
            <Button 
                id="resume-button" 
                ref={target} 
                
                onClick={
                    () => { 
                        setShow(!show); 
                    }
                }>
                    <a id="resume-icon" href={process.env.PUBLIC_URL + "./resources/ZHENG-TIMOTHY_Resume.pdf"} target="_blank" rel="noopener noreferrer"><FileEarmarkPdfFill /></a>
            </Button>
        </div>
    )
  };

function LatexButton() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <div className="ResumeButton">
            <Button 
                id="resume-button" 
                ref={target} 
                
                onClick={
                    () => { 
                        setShow(!show); 
                    }
                }>
                    <a id="resume-icon" href={process.env.PUBLIC_URL + "./resources/ZHENG-TIMOTHY_Resume.tex"} target="_blank" rel="noopener noreferrer"><FileEarmarkZipFill /></a>
            </Button>
        </div>
        )
};

export function ResumeDisplay() {
    const resumedir = process.env.PUBLIC_URL + "./resources/ZHENG-TIMOTHY_Resume.pdf"

    return (
        <div>
            <ResumeTitle />
            <iframe
                className="ResumeDisplay"
                src={resumedir}
                type='application/pdf'
                title=" "
            />
        </div>
    )
};

  function ResumeTitle() {
    return (
        <div className="ResumeTitle">
            <SepDot /> 
            <div>Résumé</div>
        </div>
    )
};