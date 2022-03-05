import React, { useEffect } from "react";
import './App.css';

const ResuresultScreen = ({ writing }) => {

    useEffect(() => {
        Screen()
    }, [writing])


    const Screen = () =>{
        return (
           <div className="screen_result"> {writing == '' ? 0 : writing} </div>
        );
    }

    return (
        Screen()
     );
}

export default ResuresultScreen;