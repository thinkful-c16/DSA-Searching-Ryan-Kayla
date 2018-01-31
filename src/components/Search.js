import React from 'react';
import Button from './Button';
import { linearSearch } from './Linear'
import { Result } from './input'
import { binarySearch } from './Binary';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.result
    }
    this.input = null;
    this.arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
  }

  handleLinear(e){
    e.preventDefault();
    console.log(this.input.value);
    let result = linearSearch(this.arr, this.input.value)
    console.log(result)
    this.setState({result})
  }
  handleBST(e){
    e.preventDefault();
    console.log(this.input.value);
    let result = binarySearch(this.arr, this.input.value)
    console.log(result);
    this.setState({result})
  }

  render() {
    return (
      <div><h1>Algorithm Comparison</h1>
        <h2>Input a number</h2>
        <form>
          <input 
            ref={input => this.input = input}/>
          <div>
            <Button 
              buttonText='Linear Search' 
              onClick={(e) => this.handleLinear(e)}/>
            <Button 
              buttonText='Binary Search' 
              onClick={(e) => this.handleBST(e)}/>
          </div>
          <div><Result result={this.state.result}/></div>
        </form>
      </div>
    )
  }
}

export default Search;