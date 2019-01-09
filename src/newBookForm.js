import React from "react";

export class NewBookFromForm extends React.Component {
  render() {
    return (
      <div>
        <h1>This is where the new Book object goes</h1>
      </div>
    );
  }
}

export class NewBookFormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      // visibility: "visible"
      formValidated: false,
    };
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

// Should get the values of fields in the form and save them to a new book object
  // handleFormSubmit(e) {
  //   e.preventDefault();
  //   const allinputs = document.querySelectorAll('input[required]');
  //   // console.log(allinputs);
  //   var formcompleted = true;
  //   var buttonscompleted = false;
  //   allinputs.forEach((inputitem, index) => {
  //     // console.log(inputitem.value);
  //     if (inputitem.value===null || inputitem.value=='') {
  //       formcompleted = false;
  //     }
  //   })
  //   const radioinputs = document.getElementsByName('haveRead');
  //   radioinputs.forEach((onebutton) => {
  //     if (onebutton.checked) {
  //       buttonscompleted = true;
  //     }
  //   })
  //   if (formcompleted && buttonscompleted) {
  //     const title = document.getElementById('title').value;
  //     const author = document.getElementById('authorname').value;
  //     const pages = document.getElementById('pages').value;
  //     const genre = document.getElementById('genre').value;
  //     const haveRead = document.querySelector('input[name="haveRead"]:checked').value;
  //     // console.log(title);
  //     // console.log(author);
  //     // console.log(pages);
  //     // console.log(genre);
  //     // console.log(haveRead);
  //     const newBook = {
  //       title: title,
  //       author: author,
  //       numPages: pages,
  //       genre: genre,
  //       isRead:haveRead
  //     };
  //     this.setState=({formValidated:true, newBook:newBook});
  //     return newBook;
  //     // console.log(newBook);
  //   } else {
  //     alert('Please fill out all fields');
  //   }
  // }  

  handleFormClick() {
    console.log("something was clicked");
    console.log(this.state.isVisible);
    // this.setState=( {isVisible: true}, () => {
    //   console.log(this.state.isVisible);
    // });
    // this.setState = ({visibility:'visible'});
    this.setState = ({ isVisible: true });
    // console.log(this.state.isVisible);
    
  }

  render() {
    if (this.state.isVisible===true) {
      return (
        <form id="addBookForm" visibility='visible' completed='false'>
          <h1>Want to Add a New Book?</h1>
          <h2>Sorry, new book addition is not available for now.</h2>
          <h2>This is a front-end only webpage for now.</h2>
          <p>
            <label htmlFor="title"> What is the title of the book?</label>
            <input id="title" name="booktitle" required />
          </p>
          <p>
            <label htmlFor="author"> Who is the author of the book?</label>
            <input id="authorname" name="authorname" required />
          </p>
          <p>
            <label htmlFor="pages"> How many pages does the book have?</label>
            <input id="pages" name="pages" required />
          </p>
          <p>
            <label htmlFor="genre">What genre is the book?</label>
            <input id="genre" name="genre" required />
          </p>
      {/*TODO: known crash case. if you submit without clicking radio button.  */}
          <p>
            Have you finished this book?
            <label htmlFor="haveRead"> Yes</label>
            <input type="radio" name="haveRead" value = "true" />
            <label htmlFor="haventRead">Nope</label>
            <input id ='haveRead' type="radio" name="haveRead" value = "false" />
          </p>
          {/* <button onClick= {this.handleFormSubmit}>Submit</button> */}
          <button onClick = {this.props.handleSubmit} >Submit (disabled) </button>
        </form>
      );
    } else {
      console.log("This is the current state " + this.state.isVisible);
      return (
        <div>
          <button id="addBookForm" onClick={this.handleFormClick}>
          Add a New Book~~!
          </button>
          {/* <form id="addBookForm" visibility='hidden'></form> */}
        </div>
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
