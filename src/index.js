import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Hierarchy
// rows within individual books
// individual book object
// library display
// book form class
// Library Class


// dont touch this for now. 
// I'll set up form entry once the library display is good.
class AddNewBookForm extends React.Component {
  render() {
    return <button> Add a New Book to the Library!</button>;
  }
}


// this component displays the 'remove book' button
class RemoveBookFromLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {

  }
  render() {
    return <button onClick={this.handleClick}>Remove Book from Library</button>;
  }
}
// TODO: define function to remove book from

// this component displays the 'read' toggle button
class ReadToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadorNot: this.props.thisBook.isRead,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newReadStatus = (this.state.isReadorNot === true) ? false : true;
    this.setState({ isReadorNot: newReadStatus });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isReadorNot.toString()}
      </button>
    );
  }
}
// TODO: define function to toggle Read state


class SingleBook extends React.Component {
  // I might not even need this constructor 
  // it was meant to get the read status of the books but its kind of unnecessary/
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     readStatus:false,
  //   };
  // }
  render() {
    const aBook = this.props.aBook;
    const title = aBook.title;
    const author = aBook.author;
    const numPages = aBook.numPages;
    const genre = aBook.genre;
    return (
      <div className="bookContainer">
        <h1>Title: {title}</h1>
        <h1>Author: {author}</h1>
        <h1>Pages: {numPages}</h1>
        <h1>Genre: {genre}</h1>
        {/* <h3>this book has been read? {this.state.readStatus.toString()}</h3> */}
        <ReadToggle thisBook={aBook} />
        <br></br>
        <RemoveBookFromLibrary />
      </div>
    );

  }
}

class LibraryContainer extends React.Component {
  render() {
    const rows = [];
    let lastBook = null;

    this.props.books.forEach((bookinlist) => {
      rows.push(
        <SingleBook
          aBook={bookinlist}
          title={bookinlist.title}
          key={bookinlist.title} />
      );

    });

    return (
      <div id="librarycontainer2">{rows}</div>
    );
  }
}

class Library extends React.Component {
  render() {
    return (
      <div>
        <AddNewBookForm />
        <LibraryContainer books={this.props.booksList} />
        <AddNewBookForm />
      </div>
    );
  }
}

// This is a list of 'book' objects 
// This version of the library project does not have backend data
const BOOKSLIST = [
  { title: 'book1', author: 'autho1 ', numPages: '1235', isRead: false, genre: 'scifi' },
  { title: 'book2', author: 'autho2 ', numPages: '1235', isRead: false, genre: 'scifi' },
  { title: 'book3', author: 'autho3 ', numPages: '1235', isRead: false, genre: 'autoBio' },
  { title: 'book4', author: 'autho4 ', numPages: '1235', isRead: true, genre: 'scifi' },
  { title: 'book5', author: 'autho5 ', numPages: '1235', isRead: false, genre: 'scifi' },
  { title: 'book6', author: 'autho6 ', numPages: '1235', isRead: false, genre: 'scifi' },
  { title: 'book7', author: 'autho8 ', numPages: '1235', isRead: false, genre: 'scifi' }
];


ReactDOM.render(
  <Library booksList={BOOKSLIST} />,
  document.getElementById("root")
);