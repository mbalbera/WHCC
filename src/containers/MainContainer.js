import React from 'react'
import '../App.css';
import WhoseHot from '../components/WhoseHot';
import News from '../components/News';
import WhWagers from '../components/WhWagers';

function MainContainer(props) {
    return(
        <div className='MainContainer'>
            <div className="ColumnOne">
                <img
                    src={props.logo}
                    style={{ width: '25%' }}
                />
                <News news={props.news}/>
            </div>
            <div className="ColumnTwo">
                <WhoseHot/>
                <WhWagers/>
            </div>
        </div>
    ) 
        
}

export default MainContainer