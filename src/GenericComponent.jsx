import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

class GenericComponent extends Component {

  handleClickOutside(e) {
    console.log('This is GenericComponent');

    switch (e.target.id) {
      case 'genericComponentTwo':
        console.log('Do something with GenericComponent if genericComponentTwo clicked');
        break;
      case 'containerComponent':
        console.log('Do something with GenericComponent if containerComponent clicked');
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="genericComponent" className="genericComponent">
        <h2>Hi I am a GenericComponent. Clicking me should trigger GenericComponentTwo's handleClickOutside</h2>
      </div>
    );
  }
}
export default onClickOutside(GenericComponent);
