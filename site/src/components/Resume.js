import ResumePDF from '../resources/ZHENG-TIMOTHY_Resume.pdf';
import ResumeZip from '../resources/ZHENG-TIMOTHY_Resume.tex';
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
                    <a id="resume-icon" href={ResumePDF} target="_blank" rel="noopener noreferrer"><FileEarmarkPdfFill /></a>
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
                    <a id="resume-icon" href={ResumeZip} target="_blank" rel="noopener noreferrer"><FileEarmarkZipFill /></a>
            </Button>
        </div>
    )
  };

  export function ResumeDisplay() {
      return (
        <div>
            <ResumeTitle />
            <iframe
                    className="ResumeDisplay"
                    src={ResumePDF}
                    type='application/pdf'
                    title=" "
                />
        </div>
      )
  }
  function ResumeTitle() {
    return (
        <div className="ResumeTitle">
            <SepDot /> 
            <div>Résumé</div>
        </div>
    )
};