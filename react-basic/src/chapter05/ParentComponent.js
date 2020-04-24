import React from 'react';
import ChildComponent from './ChildComponent';
import UserPropTypesChildComponent from './UsePropTypesChildComponent';

class ParentComponent extends React.Component {
    render() {
        return (
            <div>
                <ChildComponent sendValue="1"></ChildComponent>        
                <UserPropTypesChildComponent sendValue={200} sendValue2={222}></UserPropTypesChildComponent>    
            </div>
        )
    }
}

export default ParentComponent;