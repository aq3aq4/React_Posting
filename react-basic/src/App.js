import React from 'react';
import './App.css';
// import ParentComponent from '../src/chapter05/ParentComponent';
// import ComponentLifeCycle from '../src/chapter06/ComponentLifeCycle';
// import Layer from '../src/chapter06/Layer';
import LayerUsedCycle from '../src/chapter06/LayerUsedCycle';

function App() {
  return (
    <div>
      <div>
        {/* <h3>chapter05</h3>
        <ParentComponent/> */}
      </div>
      <div>
        <h3>chapter06</h3>
        <div id="umountTarget">
          <LayerUsedCycle/>
        </div>
      </div>
    </div>
  );
}

export default App;
