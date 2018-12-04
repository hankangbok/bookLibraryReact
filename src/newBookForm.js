import React from 'react';

export class NewBookFormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
    }
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleFormClick() {
    console.log("something was clicked");
    console.log(this.state.isVisible);
    this.setState=( {isVisible: true}, () => {
      console.log(this.state.isVisible);
    });   
  }
  render() {
    if (this.state.isVisible) {
      return (
        <form id="addBookForm">
          <p>
            <label for="title"> What is the title of the book?</label>
            <input id="title" name="booktile" required />
          </p>
          <p>
            <label for="author"> Who is the author of the book?</label>
            <input id="authorname" name="authorname" required />
          </p>
          <p>
            <label for="pages"> How many pages does the book have?</label>
            <input id="pages" name="pages" required />
          </p>
          <p>
            <label for="genre">What genre is the book?</label>
            <input id="genre" name="genre" required />
          </p>
          <p>
            Have you finished this book?
            <label for="haveRead"> Yes</label>
            <input type="radio" name="haveRead" />
            <label for="haventRead">Nope</label>
            <input type="radio" name="haveRead" />
          </p>
          <button>Submit</button>
        </form>

      );
    } else {
      console.log("This is the current state" +this.state.isVisible);
      return (
        <button id="addBookForm" onClick={this.handleFormClick}> Add a New Book~~!</button>
      );
    }
  }
}

// function addBooktoLibrary() {
//   var newBook=[ 
//     title: 'book1', 
//     author: 'autho1 ', 
//     numPages: '1235', 
//     isRead: false, 
//     genre: 'scifi' }
//   ];