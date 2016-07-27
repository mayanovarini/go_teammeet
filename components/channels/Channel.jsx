import React, {Component} from 'react';

class Channel extends Components{
  onClick(e){
    e.preverntDefault();
    const {setChannel, channel} = this.props;
    setChannel(channel);
  }
  render(){
    const {channel} = this.props;
    return(
      <li>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    )
  }
}

Channel.propTypes = {
  channel: React.propTypes.object.isRequired,
  setChannel: React.propTypes.func.isRequired
}

export default Channel
