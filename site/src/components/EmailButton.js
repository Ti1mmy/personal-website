import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { At } from 'react-bootstrap-icons'
import '../bootstrap/css/bootstrap.min.css';
import '../App.css';

export function EmailButton() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    
    const renderEmail = (props) => (
        <Tooltip id="email-hover-tooltip" {...props}>
          me@timothyz.me
        </Tooltip>
      );

    return (
        <div className="EmailButton">
        <OverlayTrigger trigger="hover" placement="bottom" overlay={renderEmail}>
            
            <Button 
            id="email-button" 
            ref={target} 
            
            onClick={
                () => { 
                    navigator.clipboard.writeText('me@timothyz.me'); 
                    setShow(!show); 
                    setTimeout(setShow, 750, show)
                }
            }>
            <At />
            </Button>
            </OverlayTrigger>

            <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
                <Tooltip id="email-copy-tooltip" {...props}>
                Copied to clipboard!
                </Tooltip>
            )}
            </Overlay>
        </div>
    );
  }