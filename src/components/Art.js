import React from 'react'

function Art(props){
    return(
        <div>
            <p className='LeftTitle'>
                Fan Art
            </p>
            <img
                src={props.fanArt.imgURL}
                style={{ height: '100px' }}
            />
            {props.fanArt.author?
               <p>Made by: {props.fanArt.author}</p>
            :
            null
            }    
        </div>
    )
}

export default Art