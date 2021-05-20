import React from 'react'
import '../App.css';

function WhoseHot() {
    return (
        <div className='RightCard'>
            <div>
                <p className='RightTitle'>Whose Hot</p>
                <img
                    src='https://a.espncdn.com/i/headshots/mlb/players/full/32129.png'
                    style={{width:'50%'}}
                />
                <div className=''>
                    <p className="RightTitle">Francisco Lindor</p>
                </div>
                <div className='FlexAndSpaceBet'>
                    <div>
                        <p className="RightText BoldTxt">Last 5 Games </p>
                        <p className="RightText">Batting Average: .645</p>
                        <p className="RightText">Homeruns: 3</p>
                        <p className="RightText">RBIs: 7</p>
                    </div>
                    <div>
                        <p className="TextAlignRight RightText BoldTxt">Favorites </p>
                        <p className="TextAlignRight RightText">Food: Pizza</p>
                        <p className="TextAlignRight RightText">Movie: Space Jam</p>
                        <p className="TextAlignRight RightText">Song: Despacito</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhoseHot