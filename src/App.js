import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Assets from './Components/Assets';
import Entities from './Components/Entities';
import { fetchAssets } from './services/fecthAssets';
import { fetchEntities } from './services/fecthEntities';

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state={
      assets:[],
      entities:[],
      idCollap:''
    }
    this.getAssets = this.getAssets.bind(this);
    this.getEntities = this.getEntities.bind(this);
    this.menuCollapsible =this.menuCollapsible.bind(this);
    this.printCode =this.printCode.bind(this);
  }
  componentDidMount(){
    this.getAssets();
    this.getEntities();
  }

  getAssets(){
    fetchAssets()
    .then(data=>{
      this.setState({
        assets:data.assets
      })
    })
  }

  getEntities(){
    fetchEntities()
    .then(data=>{
      this.setState({
        entities:data.entities
      })
    })
  }
  menuCollapsible(event){
    const newId = event.currentTarget.id;
    this.setState({
      idCollap:newId
    })
  }
  
  printCode(event){
    console.log(event.currentTarget.id)
  }

  render(){
    return (

      <div className="App">

        <header className="App-header">
          <p>
            Elix technical test
          </p>
        </header>

        <main>
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <Assets assets={this.state.assets}/>
              )}}/>
            <Route path="/asset-entities/:assetId" render={routerProps => {
            return (
              <Entities 
                routerProps={routerProps}
                entities={this.state.entities}
                assets={this.state.assets}
                menuCollapsible ={this.menuCollapsible}
                idCollap={this.state.idCollap}
                printCode={this.printCode}
              />
            
            );
          }}/>
          </Switch>
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
