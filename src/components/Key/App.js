import React from "react";
import './App.css';

export const KeyNumber = ({number, SetNumber}) => (
    <div className="card_key" onClick={() => SetNumber(number)}> {number} </div>
)

export const KeyAction = ({text, operation}) => (
    <div className="card_key" onClick={() => operation(text)}> {text} </div>
)

export const KeyDelet = ({text, newTip}) => (
    <div className="card_key card_delet" onClick={newTip}> {text} </div>
)

export const KeyReset = ({text, setReset}) => (
    <div className="card_key card_reset" onClick={setReset}> {text} </div>
)

export const KeyResult = ({text, settleAccount}) => (
    <div className="card_key card_result" onClick={settleAccount}> {text} </div>
)