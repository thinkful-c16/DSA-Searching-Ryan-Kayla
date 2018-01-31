import React from 'react';
import Button from './Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({input: this.input.value})
  }

  render() {
    return (
      <div><h1>'Hello world'</h1>
        <form>
          <input 
            ref={input => this.input = input}/>
        </form>
        <div>
          <Button 
            buttonText='Linear Search' 
            onClick={(e) => this.handleSubmit(e)}/>
          <Button buttonText='Binary Search' />
        </div>
      </div>
    )
  }
}

export default Search;