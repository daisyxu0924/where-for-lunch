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
  goBack = () => {

  }
  render() {
    return (
      <div>
        Button:
        <Button
          id="backButton"
          icon="mi-arrow-left"
          theme="backButtonTheme"
          onClick={this.goBack}
        >
          Click me
        </Button>
        Input:
        <Input displayOnly />
      </div>
    );
  }
}

export default App;
