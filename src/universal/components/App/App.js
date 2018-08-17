import React, {Component, PropTypes} from 'react';

import styles from './App.css';

class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
