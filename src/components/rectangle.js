import React from 'react';

const rectangle = ({ text, color }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '200rem', height: '200rem', backgroundColor: color, marginRight: '20px' }}></div>
        <p>{text}</p>
      </div>
    );
  };
  
  export default rectangle;