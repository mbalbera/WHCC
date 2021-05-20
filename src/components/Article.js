import React from 'react'
import '../App.css';

class Article extends React.Component{

    state={
        clicked:false,
        hover:false
    }

    render(){
        if(this.state.clicked){
            return (
                <div className='Article'>
                    <div>
                        <div 
                            className='ArticleTitleContainer'
                            onClick={() => this.setState({ clicked: false })}
                        >
                            <a href={this.props.link} target='_blank'><p className='ArticleTitle'>{this.props.title}</p></a>
                            <p className='ArticleText'>{this.props.pubDate}</p>
                        </div>
                        <p className='ArticleText'>{this.props.description}</p>                
                    </div>
                </div>
            )
        }
        else{
            return(
                <div 
                    style={this.state.hover?{backgroundColor:'#ddd'}:{}}
                    className='Article' 
                    onMouseEnter={() => this.setState({hover:true})} 
                    onMouseLeave={()=>this.setState({hover:false})} 
                    onClick={()=>this.setState({clicked:true})}
                >
                    <p className='ArticleTitle'>{this.props.title}</p>
                </div>
            )
        }
    }

}

export default Article