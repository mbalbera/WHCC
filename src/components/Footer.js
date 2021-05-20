import React from "react";
import { FaInstagramSquare, FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import '../App.css';

function Footer(props){

    return (
        <div className='FooterContainer'>
            <p className='FooterTitle'>Check us out on</p>
                <div>
                    <a
                        href={props.insta}
                        target="_blank"
                    >
                        <FaInstagramSquare size={50} color='rgb(166,168,173)'/>
                    </a>
                    <a
                        href={props.twtr}
                        target="_blank"
                    >
                        <FaTwitterSquare size={50} color='rgb(166,168,173)'/>
                    </a>
                    <a
                        href={props.fb}
                        target="_blank"
                    >
                        <FaFacebookSquare size={50} color='rgb(166,168,173)'/>    
                    </a>                    
                </div>
        </div>
    )

}

export default Footer