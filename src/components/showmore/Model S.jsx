import React, { useState } from "react";
import {Modal, Button } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles ((theme) =>({
    modal:{
    position: "absolute",
    width: 400,
    background: "#C0C0C0",
    borderRadius: 15,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3,4),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase"
    

    },
    textfield:{
        width:"100%",
        itemSize:46,
        itemCount:200,
        overscanCount:5,
        margin: 15
    },
    button:{
        marginBottom: 16,
        textDecoration: 'none',
    },
   
    lis:{
        margin: 5
    },
    App:{
        textDecoration: 'none',
    }
}))

function  Expe2(){
    const style = useStyles();

    const [modal, setModal]= useState(false);

    const abriryCerrarModal = () =>{
        setModal(!modal);
    }
    
    const body = (
        <div className ={style.modal}>
            <div align ="center">
                <h2>Especificaciones</h2>
                <hr></hr>
            </div>
            <div className={style.textfield}>
               <ul>
                <li className={style.lis}><h3>Acceleration 0-60 mph:  1.99 sec</h3></li>
                <li className={style.lis}><h3>Acceleration 0-100 mph:  4.2 sec</h3></li>
                <li className={style.lis}><h3>Acceleration 1/4 mile:  9.23 sec</h3></li>
                <li className={style.lis}><h3>Top Speed:  200 mph</h3></li>
                <li className={style.lis}><h3>Wheel Torque:  6,500 Nm</h3></li>
                <li className={style.lis}><h3>Mile Range:  405 miles</h3></li>
                <li className={style.lis}><h3>Seating:  4</h3></li>
                <li className={style.lis}><h3>Drive:  All-Wheel Drive</h3></li>
               </ul>
            </div>
            <br/>
            <div align = "right">
                <Button className={style.cruz} onClick ={()=>abriryCerrarModal()}><h2>Exit</h2></Button>

            </div>
        </div>
    )
    
    return(
       <div className ={style.App}>
           <br />
           <Button className={style.button} onClick={() =>abriryCerrarModal()}><a>Learn More</a></Button>
           <Modal 
           open={modal}
           onClose={abriryCerrarModal}>
               {body}
           </Modal>

       </div> 
    )
}

export default Expe2
