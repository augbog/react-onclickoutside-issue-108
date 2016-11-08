import React, {Component} from 'react';

import ContainerComponent from './ContainerComponent.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1><code>react-onclickoutside issue #108</code></h1>
        <div>
          <ContainerComponent />
        </div>
      </div>
    );
  }
}
export default App;
