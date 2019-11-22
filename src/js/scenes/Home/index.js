import React, {
  Component, Fragment
} from 'react';

import Hero from './Hero';
import Contact from './Contact';
import Business from './Business';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Business />
        <Contact />
      </Fragment>
    );
  }
}

export default Home;
