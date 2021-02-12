import React, { Component } from 'react';

class GetACharity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      charity: null,
      random:null
    };
  }

  min = 0;
  max = 19;

  handleClick = () => {
    this.setState({random: this.min + Math.floor((Math.random() * (this.max - this.min)))});
    fetch("https://hackaton-1d230-default-rtdb.europe-west1.firebasedatabase.app//charities/"+this.state.random+".json")
      .then((resp) => resp.json())
      .then((data) => this.setState({ charity: data }))
  };



  render() {

    return (
        <>

        <div>
            <button onClick={this.handleClick}>Click me</button>
            {this.state.random}
        </div>


            {
              this.state.charity != null &&
                <>
                  <img 
                    src={this.state.charity.image}
                />
                </>
            }
        </>
    )
  }

}


export default GetACharity;