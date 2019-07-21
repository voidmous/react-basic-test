import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import logo from './logo.svg';
import './App.css';
import { WindowWidth } from './WindowWidth';
import { LifeCycleWrapper } from './LifeCycle';
import { AJAX } from './AJAX';
import { UseRef } from './UseRef';
import { Ancestor } from './context/Ancestor';
import { Parent } from './context/Parent';
import { Props } from './Props';
import { SimpleRef } from './SimpleRef';
import Counter from './redux/Counter';

const initialState = {
  count: 10
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <WindowWidth /><br /><hr /><br />
      <LifeCycleWrapper /><br /><hr /><br />
      <AJAX source="https://api.github.com/users/octocat/gists" /><br /><hr /><br />
      <UseRef /><br /><hr /><br />
      <Ancestor>
        <div>
          <Parent />
        </div>
      </Ancestor><br /><hr /><br />
      <Props value={100} >
        <div> "Children" </div>
      </ Props><br /><hr /><br />
      <p>Ref DOM: </p><SimpleRef /><br /><hr /><br />
      <h2>Redux Example</h2>
      <Provider store={store}>
        <Counter />
      </Provider>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
