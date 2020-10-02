import React from 'react';
import './App.scss';
import { Jumbotron } from './components/jumbotron/Jumbotron';
import { Yelp } from './components/request/Yelp';
import { ResponseArea } from './components/ResponseArea/ResponseArea';
import { Searchbar } from './components/Searchbar/Searchbar';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        businesses: [],
        location: '',
        term: '',
        sortBy: 'best_match'
      };
      
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleClick = this.handleClick.bind(this)
    }

    handleLocationChange(location){
      this.setState({location: location})
    }

    handleTermChange(term){
      this.setState({term:term})
    }

    handleClick(event) {
      event.preventDefault();
      Yelp.makeRequest(this.state.location, this.state.term, this.state.sortBy)
      .then(response => {
        console.log(response)
        if(response){
          this.setState({businesses: response.businesses})
        } else {
          this.setState({businesses: []})
        }
      });       
    }

    renderResponse(){
      if (this.state.businesses.length){
      return(
        <ResponseArea businesses={this.state.businesses}/>
      )} else {
        return <Jumbotron />
      }
    }


    render(){
      return (
      <div className='container'>
          <h1 >React</h1>
          <Searchbar onLocationChange={this.handleLocationChange} onTermChange={this.handleTermChange} onClick={this.handleClick}/>
          {this.renderResponse()}
      </div>
      );  
    }
}

export default App;
