import React, { Component } from 'react';

import Button from './components/button';
import Input from './components/input';

/**
 * @render react
 * @name App
 * @description Whole app composed to tiny bit components.
 * @example
 * <App />
 */
class App extends Component {
  render() {
    return (
      <div>
        Button:
        <Button />
        Input:
        <Input />
      </div>
    );
  }
}

export default App;
