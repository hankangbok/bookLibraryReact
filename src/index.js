import React from 'react';
import ReactDOM from 'react-dom';

// rows within individual books
// individual books
// library display
// book form class
// Library Class

class libraryContainer extends React.Component {
  render() {
    return (
     <div>
       <h1>book Title Here</h1>
       <h1>book author Here</h1>
       <h1>book num of pages Here</h1>
       <h1>read/Not read Here</h1>
     </div> 
    )
  }
}


class bookForm extends React.Component {
  render() {
    return <div> none</div>;
  }
}

class Library extends React.Component {
  render() {
    return <h1>This is making sure Library renders</h1>;
  }
}


ReactDOM.render(
  <Library  />,
  document.getElementById("root")
);