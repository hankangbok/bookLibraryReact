import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NewBookFormEntry } from "./newBookForm";

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

// class AddNewBookForm extends React.Component {
//   render() {
//     return <NewBookFormEntry />;
//   }
// }

// this component displays the 'read' toggle button
class ReadToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadorNot: this.props.thisBook.isRead
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newReadStatus = this.state.isReadorNot === true ? false : true;
    this.setState({ isReadorNot: newReadStatus });
  }
  render() {
    let isReadButton;
    if (this.state.isReadorNot === true) {
      isReadButton = "Finished!";
    } else {
      isReadButton = "Working on It";
    }
    return (
      <h3>
        Have you finished the book?
        <button onClick={this.handleClick}>
          {/* {this.state.isReadorNot.toString()} */}
          {isReadButton}
        </button>
      </h3>
    );
  }
}

class RemoveBookFromLibrary extends React.Component {
  render() {
    return (
      <button title={this.props.title} onClick={this.props.onClick}>
        Remove this Book from Library
      </button>
    );
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
        <h2>Author: {author}</h2>
        <h2>Pages: {numPages}</h2>
        <h2>Genre: {genre}</h2>
        <ReadToggle thisBook={aBook} />
        <br />
        <RemoveBookFromLibrary title={title} onClick={this.props.onClick} />
      </div>
    );
  }
}

class LibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooks: [
        {
          title: "Lord of the Rings: Fellowship of the Ring",
          author: "JRR Tolkien ",
          numPages: "1235",
          isRead: true,
          genre: "Fantasy"
        },
        {
          title: "Lord of the Rings: The Two Towers",
          author: "JRR Tolkien ",
          numPages: "1235",
          isRead: false,
          genre: "Fantasy"
        },
        {
          title: "Lord of the Rings: Return of the King",
          author: "JRR Tolkien ",
          numPages: "1235",
          isRead: false,
          genre: "Fantasy"
        },
        {
          title: "Game of Thrones",
          author: "George R R Martin ",
          numPages: "1235",
          isRead: true,
          genre: "Fantasy"
        },
        {
          title: "Cell ",
          author: "Stephen King ",
          numPages: "1235",
          isRead: false,
          genre: "horror"
        },
        {
          title: "Design It Yourself",
          author: "Ellen Lipton",
          numPages: "1235",
          isRead: false,
          genre: "DIY"
        },
        {
          title: "Fullmetal Alchemist",
          author: "Hiromu Arakawa",
          numPages: "1235",
          isRead: false,
          genre: "manga"
        }
      ]
    };
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  // Even handler for removing books
  handleRemoveClick(e) {
    const theTitle = e.currentTarget.title;
    console.log("this is the book to remove" + theTitle);

    const allBooks1 = this.state.allBooks;
    const index = allBooks1.findIndex(eachBook => eachBook.title === theTitle);
    allBooks1.splice(index, 1);
    this.setState({ allBooks: allBooks1 });
  }

  render() {
    const rows = [];
    this.state.allBooks.forEach(bookinlist => {
      rows.push(
        <SingleBook
          aBook={bookinlist}
          title={bookinlist.title}
          key={bookinlist.title}
          onClick={this.handleRemoveClick}
        />
      );
    });

    return <div id="librarycontainer2">{rows}</div>;
  }
}


class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummystate: "blank",
      newBook: { title: "Your new book will go here", key: "placeholder" },
      formValidated: 'false'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(e) {
    e.preventDefault();
    const allinputs = document.querySelectorAll("input[required]");
    // console.log(allinputs);
    var formcompleted = true;
    var buttonscompleted = false;
    allinputs.forEach((inputitem, index) => {
      // console.log(inputitem.value);
      if (inputitem.value === null || inputitem.value == "") {
        formcompleted = false;
      }
    });
    const radioinputs = document.getElementsByName("haveRead");
    radioinputs.forEach(onebutton => {
      if (onebutton.checked) {
        buttonscompleted = true;
      }
    });
    if (formcompleted && buttonscompleted) {
      const title = document.getElementById("title").value;
      const author = document.getElementById("authorname").value;
      const pages = document.getElementById("pages").value;
      const genre = document.getElementById("genre").value;
      const haveRead = document.querySelector('input[name="haveRead"]:checked')
        .value;
      console.log(title);
      // console.log(author);
      // console.log(pages);
      // console.log(genre);
      // console.log(haveRead);
      const newBook = {
        title: title,
        author: author,
        numPages: pages,
        genre: genre,
        isRead: haveRead
      };
      console.log(this.state.formValidated);
      this.setState = ({ formValidated: 'true' },
      function() {
        console.log(this.state.formValidated);
      });
      this.setState = { newBook: newBook };
      console.log(this.state.newBook);
      const asRead = haveRead ? 'read' : 'not read' ;
      alert(`Your book would have been added with 
      Title: ${title}, 
      Author: ${author}, 
      Pages: ${pages}, 
      Genre: ${genre} 
      and marked as ${asRead} `);
      // console.log(newBook);
    } else {
      alert("Please fill out all fields");
    }

  }
  render() {
    return (
      <div>
        <NewBookFormEntry handleSubmit={this.handleFormSubmit} />
        {/* <SingleBook aBook={this.state.newBook} /> */}
        <LibraryContainer books={this.props.booksList} />
        {/* <AddNewBookForm /> */}
      </div>
    );
  }
}

// This is a list of 'book' objects
// This version of the library project does not have backend data
// const BOOKSLIST = [
//   { title: 'book1', author: 'autho1 ', numPages: '1235', isRead: false, genre: 'scifi' },
//   { title: 'book2', author: 'autho2 ', numPages: '1235', isRead: false, genre: 'scifi' },
//   { title: 'book3', author: 'autho3 ', numPages: '1235', isRead: false, genre: 'autoBio' },
//   { title: 'book4', author: 'autho4 ', numPages: '1235', isRead: true, genre: 'scifi' },
//   { title: 'book5', author: 'autho5 ', numPages: '1235', isRead: false, genre: 'scifi' },
//   { title: 'book6', author: 'autho6 ', numPages: '1235', isRead: false, genre: 'scifi' },
//   { title: 'book7', author: 'autho8 ', numPages: '1235', isRead: false, genre: 'scifi' }
// ];

ReactDOM.render(
  <Library />,
  // <Library booksList={BOOKSLIST} />,
  document.getElementById("root")
);
