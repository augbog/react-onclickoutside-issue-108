import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

import GenericComponent from './GenericComponent.jsx';
import GenericComponentTwo from './GenericComponentTwo.jsx';

class ContainerComponent extends Component {

  handleClickOutside(e) {
    console.log(e);
    console.log('This is ContainerComponent');
  }

  render() {
    return (
      <div id="containerComponent" className="containerComponent">
        <p>Hello I am an container component. I will trigger all my children's handleClickOutside events... but how do I control which one?</p>
        <div>
          <GenericComponent />
        </div>
        <div>
          <GenericComponentTwo />
        </div>
        <p>It seems adding ids and calling a <code>switch</code> event can work, but what if they click one of the children? Is there a better way of handling this?</p>
      </div>
    );
  }
}
export default onClickOutside(ContainerComponent);
