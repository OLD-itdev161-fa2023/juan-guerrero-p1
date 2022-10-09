
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data : null
  }

componentDidMount() {
  axios.get('http://localhost:5000')
  .then((response) => {
    this.setState({
      data: response.data
    })
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  })
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        T Shirt Choices 
      </header>
      <div class="card">

  <h1>T-Shirt</h1>
  <p class="price">$10.99</p>
  <p>Choose Color, Style, Size about the T-Shirts ..</p>
  <p><button>Add to Cart</button></p>
</div>
          
        
    
      {this.state.data}
    </div>
    );
  }    
}


export default App;
