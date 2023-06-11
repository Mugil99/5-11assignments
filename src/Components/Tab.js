import React, { useState } from 'react';
const Tab=(props)=>{
    const[cont,setCont]=useState("")
    const {arr}=props;
    console.log(arr)
    function display(index){
        setCont(arr[index].content)
    }
    return(
        <>
        <ul>
            {
                arr.map((obj,index)=>{
                    return(
                        <li onClick={()=>{display(index)}}>{obj.title}</li>
                    )
                })
            }
        </ul>
        <p>{cont}</p>
        </>
    )
}
export default Tab;