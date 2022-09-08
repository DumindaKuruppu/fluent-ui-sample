import './App.css';
import { PrimaryButton } from '@fluentui/react';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Click the Button</p>
        <PrimaryButton text="Primary" onClick={_alertClicked} />
      </header>
    </div>
  );
}

function _alertClicked() {
  alert('Clicked');
}

export default App;
