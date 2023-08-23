import { useState } from 'react';
import './App.css';
import ColorBlock from './components/Colorblock';
import ColorForm from './components/Colorform';

function App() {
  let [colors, setColors] = useState(['blue', 'gray', 'lightblue', 'purple', 'tan', 'yellow', 'lightgray', 'lightblue']);

  const colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
    const addColor = (newColor) => {
        setColors([colors, newColor]) 
    }

    return (
        <div className="App">
            {colorMap}
            <ColorForm addColor={addColor} />
        </div>
    )
}

export default App;
