import React from "react";
import { KeyNumber, KeyAction, KeyDelet, KeyReset, KeyResult } from "../Key/App";
import './App.css';

const Keyboard = ({SetNumber, setReset, operation, settleAccount}) => {
    return (
        <>
            <div className="keyboard"> 
                <KeyNumber SetNumber={SetNumber} number={"1"}/>
                <KeyNumber SetNumber={SetNumber} number={"2"}/>
                <KeyNumber SetNumber={SetNumber} number={"3"}/>
                <KeyDelet operation={operation} text={"DEL"}/>
                <KeyNumber SetNumber={SetNumber} number={"4"}/>
                <KeyNumber SetNumber={SetNumber} number={"5"}/>
                <KeyNumber SetNumber={SetNumber} number={"6"}/>
                <KeyAction operation={operation} text={"+"}/>
                <KeyNumber SetNumber={SetNumber} number={"7"}/>
                <KeyNumber SetNumber={SetNumber} number={"8"}/>
                <KeyNumber SetNumber={SetNumber} number={"9"}/>
                <KeyAction operation={operation} text={"-"}/>
                <KeyNumber SetNumber={SetNumber} number={"."}/>
                <KeyNumber SetNumber={SetNumber} number={"0"}/>
                <KeyAction operation={operation} text={"/"}/>
                <KeyAction operation={operation} text={"*"}/>
                <KeyReset setReset={setReset} text={"RESET"}/>
                <KeyResult settleAccount={settleAccount} text={"="}/>
            </div>
        </>
    );
}

export default Keyboard;