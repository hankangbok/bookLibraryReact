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
class BookForm extends React.Component {
  render() {
    return <div> none</div>;
  }
}

class BookTitle extends React.Component {
  render() {
    return ;
  }
}

class RemoveBookFromLibrary extends React.Component {
  render() {
    return <button>Remove Book from Library</button>;
  }
}

class ReadToggle extends React.Component {
  render() {
    return <button>Eventually this will toggle read status</button>;
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
      <div className="bookBorder">
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{numPages}</h1>
        <h1>{genre}</h1>
        <ReadToggle />
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
     <div>
       <h1>{rows}</h1>
     </div> 
    );
  }
}

class Library extends React.Component {
  render() {
    return (
      <div>
        <LibraryContainer books={this.props.booksList} />
        <h1>This is making sure Library renders</h1>
      </div>
    );
  }
}

// This is a list of 'book' objects 
// This version of the library project does not have backend data
const BOOKSLIST = [
  {title: 'book1', author: 'autho1 ', numPages: '1235', isRead:false, genre: 'scifi'},
  {title: 'book2', author: 'autho2 ', numPages: '1235', isRead:false, genre: 'scifi'},
  {title: 'book3', author: 'autho3 ', numPages: '1235', isRead:false, genre: 'autoBio'},
  {title: 'book4', author: 'autho4 ', numPages: '1235', isRead:true, genre: 'scifi'},
  {title: 'book5', author: 'autho5 ', numPages: '1235', isRead:false, genre: 'scifi'},
  {title: 'book6', author: 'autho6 ', numPages: '1235', isRead:false, genre: 'scifi'},
  {title: 'book7', author: 'autho8 ', numPages: '1235', isRead:false, genre: 'scifi'}
];


ReactDOM.render(
  <Library  booksList={BOOKSLIST} />,
  document.getElementById("root")
);