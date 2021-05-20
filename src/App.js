import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer'
import HeaderContainer from './containers/HeaderContainer'
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
    if(this.state.data === 'loading'){
      return(
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    else{
      return (
        <div className="App">
          <header>
            <HeaderContainer nameLogo={this.state.data.strTeamLogo} />
          </header>
          <MainContainer logo={this.state.data.strTeamBadge} news={this.state.data.strRSS}/>
          <Footer twtr={this.state.data.strTwitter} fb={this.state.data.strFacebook} insta={this.state.data.strInstagram}/>
        </div>
      );
    }
  }
}

export default App;
