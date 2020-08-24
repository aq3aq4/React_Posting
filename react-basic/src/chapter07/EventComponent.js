import React from 'react';
class EventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.stopEvent = this.stopEvent.bind(this);
    }
 
    //event
    stopEvent() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <button onClick={this.stopEvent.bind(this)}>
                    정지
                </button>
            </div>
        )
    }

}

export default EventComponent;