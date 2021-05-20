import React from 'react'
import '../App.css';


function HeaderContainer(props) {
    return (
        <div className="HeaderContainer">
            <img 
                src={props.nameLogo}
                className='HeaderLogo'
            />
            <div className="FlexAndSpaceEven">
                {/* <div className="HeaderButton">
                    <p className='HeaderText'>Stats</p>
                </div> */}
                <div className="HeaderButton">
                    <p className='HeaderText'>Roster</p>
                </div>
                <div className="HeaderButton">
                    <p className='HeaderText'>Standings</p>
                </div>
                <div className="HeaderButton">
                    <p className='HeaderText'>Schedule</p>
                </div>
                <div className="HeaderButton">
                    <p className='HeaderText'>Tickets</p>
                </div>
            </div>
        </div>
    )

}

export default HeaderContainer