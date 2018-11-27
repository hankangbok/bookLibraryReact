import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "my friend(from state)!"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  
  updateMessage() {
    this.setState({
      message: "my friend (from changed state) !"
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
        <button onClick={this.updateMessage}>Click me!</button>
      </div>
    )  
  }
}


ReactDOM.render(
  <Hello message="my friend" />,
  document.getElementById("root")
);