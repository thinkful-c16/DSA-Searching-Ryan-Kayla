import React from 'react';
import Button from './Button';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.input
    }
  }

  render() {
    return (
      <div><h1>'Hello world'</h1>
      <Button buttonText='Linear Search' />
      <Button buttonText='Binary Search' />
      </div>
    )
  }
}

export default Search;