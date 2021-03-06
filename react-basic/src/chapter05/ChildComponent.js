import React from 'react';

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sendValue: Number(this.props.sendValue)
        }

        setInterval(() => {
            this.setState({
                sendValue: this.state.sendValue + 1
            });
        }, 1000)
    }
    render() {
        return (
            <div>
                <p>이 값은 부모로 부터 전달 된 {this.props.sendValue}</p>
                <p>이 값은 가공된 {this.state.sendValue}</p>
            </div>
        )
    }
}

export default ChildComponent;