import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer'
import HeaderContainer from './components/HeaderContainer'
import React from 'react';
import Footer from './components/Footer';

class App extends React.Component{
  state = {
    data:'loading'
  }

  componentDidMount(){
    this.getData()
  }

  getData = ()=>{
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_mets')
    .then(resp=>resp.json())
    .then(responseJson =>{
      let data = responseJson.teams[0]
      document.title = data.strTeam
      this.setState({data})
    })
  }


  render(){
    const {data} = this.state
    if(data === 'loading'){
      return(
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    else{
      
      let fanArt = [{imgURL:data.strTeamFanart1,author:'Andrew'}, {imgURL:data.strTeamFanart2,author:'Peter'}, {imgURL:data.strTeamFanart3,author:'Jill'}, {imgURL:data.strTeamFanart4,author:'Jack'}, ]
      return (
        <div className="App">
          <header>
            <HeaderContainer nameLogo={data.strTeamLogo} />
          </header>
          <MainContainer news={data.strRSS} fanArt={fanArt}/>
          <Footer twtr={data.strTwitter} fb={data.strFacebook} insta={data.strInstagram}/>
        </div>
      );
    }
  }
}

export default App;
