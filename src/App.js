import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes:[]
    }
  }
  componentDidMount(){
    fetch("http://localhost:8000/api/shoe/")
    .then((res)=>res.json())
    .then((data)=>this.setState({shoes: data}))
  }
  render(){

  
  return (
    <div>
      {this.state.shoes.map((shoe)=>(
        <div>
          <ul>
            <li>Brand Name: {shoe.brandname}</li>
            <li>Size: {shoe.size}</li>
            <li>Manufacturer: {shoe.manufacturer}</li>
            <li>Color: {shoe.color}</li>
            <li>Material: {shoe.material}</li>
            <li>Shoe Type: {shoe.shoe_type}</li>
            <li>Fasten Type: {shoe.fasten_type}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
}

export default App;
