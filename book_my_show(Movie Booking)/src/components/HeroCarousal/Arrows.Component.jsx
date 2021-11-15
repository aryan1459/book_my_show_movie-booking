import React from 'react'

export function NextArrow(props){
    //  props={
    //      className:"",
    //      style:"",
    //      onclick:""
    // we are dextruring them and using it
    //  }
    return (<>
    <div className={props.className} 
    style={{...props.style}} 
    onClick={props.onClick}></div>
    </>
    );
}


export function PrevArrow(props){
    return (<>
        <div className={props.className} 
        style={{...props.style}}
        
        onClick={props.onClick}></div>
        </>
        );
}