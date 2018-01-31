import React from 'react';
import Button from './Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.input = null;
  }

  handleLinear(e){
    e.preventDefault();
    console.log(this.input.value);
  }

  render() {
    return (
      <div><h1>'Hello world'</h1>
      <form>
        <input 
          ref={input => this.input = input}/>
        <div>
          <Button 
            buttonText='Linear Search' 
            onClick={(e) => this.handleLinear(e)}/>
          <Button buttonText='Binary Search' />
        </div>
      </form>
      </div>
    )
  }
}

export default Search;