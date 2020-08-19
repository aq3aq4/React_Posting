import React from 'react';
import ReactDOM from 'react-dom';
import ComponentLifeCycle from './ComponentLifeCycle';

class Layer extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(function() {
            ReactDOM.render(<ComponentLifeCycle hi='우현ㅎㅇ'/>, document.getElementById('componentLifeCycleComponent'))
        }, 1000)

        setTimeout(function() {
            ReactDOM.render(<ComponentLifeCycle hi='준영ㅎㅇ'/>, document.getElementById('componentLifeCycleComponent'))
        }, 2000)

        setTimeout(function() {
            ReactDOM.unmountComponentAtNode(document.getElementById('componentLifeCycleComponent'));
        }, 3000)
    }

    render() {
        return (
            <div id="componentLifeCycleComponent">
            </div>
        )
    }

    componentDidCatch(err, info) {
        console.log('componentDidCatch 호출');
    }
}

export default Layer;