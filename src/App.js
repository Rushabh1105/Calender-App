import './App.css';
import React, {  } from 'react';
import Calender from './Components/Calender';
import store from './Store/Store';
import { Provider } from 'react-redux'

function App() {





  return (
    <div className="App">
      <Provider store={store} >
        <Calender />
      </Provider>
    </div>
  );
}

export default App;
