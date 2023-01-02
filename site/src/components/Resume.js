import { SepDot } from "./Misc.js";

import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { FileEarmarkPdfFill, FileEarmarkZipFill } from 'react-bootstrap-icons';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../bootstrap/css/bootstrap.css';
import '../App.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


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
            <Document file={resumedir} className="ResumeDisplay">
                <Page pageNumber={1} height={1200} />
            </Document>
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
