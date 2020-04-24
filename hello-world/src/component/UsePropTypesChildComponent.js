import React from 'react';
import PropTypes from 'prop-types';

class UserPropTypesChildComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>이 값은 부모로 부터 전달 된 {this.props.name} {this.props.sendValue}</h1>
            </div>
        )
    }
}

UserPropTypesChildComponent.defaultProps = {
    name: '우현이'
}

UserPropTypesChildComponent.propTypes = {
    sendValue: PropTypes.number.isRequired,
    sendValueRangeCheck: function(props) {
        if(props['sendValue'] > 100) {
            return new Error('sendValue는 100이하');
        }
    }
}

export default UserPropTypesChildComponent;