import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

class GenericComponentTwo extends Component {

  handleClickOutside(e) {
    console.log('This is GenericComponentTwo');

    switch (e.target.id) {
      case 'genericComponent':
        console.log('Do something with GenericComponentTwo if genericComponent clicked');
        break;
      case 'containerComponent':
        console.log('Do something with GenericComponentTwo if containerComponent clicked');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="genericComponentTwo" className="genericComponent">
        <h2>Hi I am GenericComponentTwo. Clicking me should trigger GenericComponent's handleClickOutside</h2>
      </div>
    );
  }
}
export default onClickOutside(GenericComponentTwo);
