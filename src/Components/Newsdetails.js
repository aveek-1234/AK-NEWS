import { Button } from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import Modal from 'react-modal'
import './Newsdetails.css';

function Newsdetails(props) {
    
    return ( <> 
                <Modal isOpen={props.view}>
                <div className="Totaldetail" >
                 <h2>{props.data.title}</h2>
                 <img src={props.data.image.url}/>
                <div className="Details">{props.data.body}
       <Button size="Small" color="red" className="close"  onClick={()=>props.setview(false)} >Close</Button>
    </div>
    </div>
    </Modal>
   </> );
}
export default Newsdetails;
