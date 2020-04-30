import React from 'react';

import HelloService from '../service/HelloService';

class Hello extends React.Component {
  state = {
    message: 'abc'
  }

  componentDidMount() {
    HelloService.getHello()
      .then(data => {
        this.setState({ message: data?.message });
      })
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {message}
      </div>
    )
  }
}

export default Hello;