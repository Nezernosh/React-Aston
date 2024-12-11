import React from 'react';

const ChildComponent = ({ stringProp, numberProp, objectProp, functionProp }) => {
    console.log('[ChildComponent] render');
    return (
        <div style={{ border: '1px solid #000', marginTop: '20px', padding: '10px' }}>
            <h3>Child Component</h3>
            <p>String: {stringProp}</p>
            <p>Number: {numberProp}</p>
            <p>Object: {JSON.stringify(objectProp)}</p>
            <button onClick={functionProp}>Function</button>
        </div>
    );
};

export default ChildComponent;
