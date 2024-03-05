import React from 'react';

class Header extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h2>Header Component: {this.props.title}</h2>
      </div>
    );
  }
}

export default Header;

// const header = new Header(props);
// header.props = props;
// header.render();
