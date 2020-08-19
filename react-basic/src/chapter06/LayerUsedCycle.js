import React from 'react';
import ReactDOM from 'react-dom';
import ComponentLifeCycle from './ComponentLifeCycle';

class LayerUsedCycle extends React.Component {
    render() {
        return (
            <div id="componentLifeCycleComponent">
            </div>
        )
    }

    componentDidMount() {
        //ComponentLifeCycle Component를 render하는건 componentDidMount에서
        ReactDOM.render(<ComponentLifeCycle hi='우현ㅎㅇ'/>, document.getElementById('componentLifeCycleComponent'))
        setTimeout(function() {
            ReactDOM.render(<ComponentLifeCycle hi='준영ㅎㅇ'/>, document.getElementById('componentLifeCycleComponent'))
        }, 1000)

        setTimeout(function() {
            ReactDOM.unmountComponentAtNode(document.getElementById('componentLifeCycleComponent'));
        }, 2000)
    }

}

export default LayerUsedCycle;