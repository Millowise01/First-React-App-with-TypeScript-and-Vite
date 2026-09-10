import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  name: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div className="my-component">
      <h1>Hello from MyComponent!</h1>
      <p>Welcome, {name}. This is my paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;
