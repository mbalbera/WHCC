import React from 'react'
import '../App.css';

function WhWagers() {
    return (
        <div className='RightCard'>
            <div>
                <p className="RightTitle">William Hill Wagers</p>
                <div className="WagerContainer">
                    <p className="RightText">Mets Moneyline </p>
                    <p className="RightText">-250</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">Mets Spread -2.5</p>
                    <p className="RightText">-110</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">Braves Moneyline</p>
                    <p className="RightText">+175</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">Braves Spread +2.5</p>
                    <p className="RightText">-110</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">Total 7.5</p>
                    <p className="RightText">-110</p>
                </div>
            </div>
            <div>
                <p className="RightTitle">Player Props</p>
                <div className="WagerContainer">
                    <p className="RightText">Lindor Total Bases over 3 </p>
                    <p className="RightText">+110</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">DeGrom Total K's over 7 </p>
                    <p className="RightText">EVEN</p>
                </div>
                <div className="WagerContainer">
                    <p className="RightText">Pete Alonso Will hit a homerun </p>
                    <p className="RightText">+300</p>
                </div>
            </div>
        </div>
    )

}

export default WhWagers