import React from 'react'


class EventSend extends React.Component {

  keydownHandler = e => {
    if(e.keyCode===13 && e.ctrlKey){
      this.props.evalCode(true)
    }
  }

  componentDidMount(){
    document.addEventListener('keydown',this.keydownHandler)
  }
  componentWillUnmount(){
    document.removeEventListener('keydown',this.keydownHandler)
  }
  render(){
    return <></>
  }
}

export default EventSend;
