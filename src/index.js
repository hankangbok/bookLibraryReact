import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {NewBookFormEntry} from './newBookForm'

// dont touch this for now. 
// I'll set up form entry once the library display is good.
// class AddNewBookForm extends React.Component {
//   render() {
//     // return <NewBookFormEntry />
//     return (
//       <button> Add a New Book to the Library!</button>
//     );
//   }
// }

class AddNewBookForm extends React.Component {
  render() {
    return <NewBookFormEntry />;
  }
}

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

class RemoveBookFromLibrary extends React.Component {
  render() {
    return <button title={this.props.title} onClick={this.props.onClick}>Remove this Book from Library</button>;
  }
}

class SingleBook extends React.Component {

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
        <ReadToggle thisBook={aBook} />
        <br></br>
        <RemoveBookFromLibrary title={title} onClick={this.props.onClick} />
      </div>
    );

  }
}

class LibraryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBooks:  [
        { title: 'book1', author: 'autho1 ', numPages: '1235', isRead: false, genre: 'scifi' },
        { title: 'book2', author: 'autho2 ', numPages: '1235', isRead: false, genre: 'scifi' },
        { title: 'book3', author: 'autho3 ', numPages: '1235', isRead: false, genre: 'autoBio' },
        { title: 'book4', author: 'autho4 ', numPages: '1235', isRead: true, genre: 'scifi' },
        { title: 'book5', author: 'autho5 ', numPages: '1235', isRead: false, genre: 'scifi' },
        { title: 'book6', author: 'autho6 ', numPages: '1235', isRead: false, genre: 'scifi' },
        { title: 'book7', author: 'autho8 ', numPages: '1235', isRead: false, genre: 'scifi' }
      ]
    }
    this.handleRemoveClick=this.handleRemoveClick.bind(this);
  }
  
  // Even handler for removing books
  handleRemoveClick(e){ 
    const theTitle = e.currentTarget.title;
    console.log("this is the book to remove" + theTitle);

    const allBooks1 = this.state.allBooks;
    const index = allBooks1.findIndex(eachBook => eachBook.title === theTitle);
    allBooks1.splice(index,1);
    this.setState({allBooks: allBooks1});
  }

  
  render() {
    const rows = [];
    this.state.allBooks.forEach((bookinlist) => {
      rows.push(
        <SingleBook
          aBook={bookinlist}
          title={bookinlist.title}
          key={bookinlist.title}
          onClick={this.handleRemoveClick} />
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
        <NewBookFormEntry onClick={this.props.handleFormClick} />
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