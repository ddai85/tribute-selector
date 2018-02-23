require('bootstrap/dist/css/bootstrap.min.css');
require('./main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3>Split your team</h3>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
