import React from 'react';

class ComponentLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("Mount 단계 시 호출 - constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("Mount, Update 단계 시 호출 - getDerivedStateFromProps");
        return prevState;
    }

    render() {
        console.log("render 동작");
        return (
            <div>
                <h3>컴포넌트 라이프 사이클</h3>
                <h3>{this.props.hi}</h3>
            </div>
        )
    }

    componentDidMount() {
        console.log("Mount 단계 시 호출 - componentDidMount");
    }


    shouldComponentUpdate(nextProps, nextState) {
        console.log("Update 단계 시 호출 - shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log("Update 단계 시 호출 - getSnapshotBeforeUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("Update 단계 시 호출 - componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Unmount 단계 시 호출 - componentWillUnmount");
    }

    componentDidCatch() {
        console.log("자식의 에러 캐치 시 호출");
    }

}

export default ComponentLifeCycle;