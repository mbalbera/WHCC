import React from 'react'
import '../App.css';
import WhoseHot from '../components/WhoseHot';
import News from '../components/News';
import WhWagers from '../components/WhWagers';
import Art from './Art';

class MainContainer extends React.Component {
    
    state={
        image:0
    }

    componentDidMount(){
        this.interval =  setInterval(()=>this.changeImage(),2500)
    }

    changeImage =()=>{
        let image = this.state.image + 1
        image %= this.props.fanArt.length
        this.setState({image})
    }

    render(){
        return(
            <div className='MainContainer'>
                <div className="ColumnOne">
                    <Art fanArt={this.props.fanArt[this.state.image]}/>
                    <News news={this.props.news}/>
                </div>
                <div className="ColumnTwo">
                    <WhoseHot/>
                    <WhWagers/>
                </div>
            </div>
        ) 
    } 
}

export default MainContainer