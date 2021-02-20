import React from 'react';
import Main from "./components/Main";
import Trade from './components/Trade';
import '../src/style/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';


class App extends React.Component {


  render() {

    return (
      <div className="App">
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/trading" component={Trade} />
            </Switch>
          </Router>
        </>
      </div>
    );
  }

}

export default App;
