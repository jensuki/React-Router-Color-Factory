import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';
import { useState } from 'react';
import './App.css'

function App() {
  const [colors, setColors] = useState([
    { name: 'red', value: '#FF0000' },
    { name: 'green', value: '#00FF00' },
    { name: 'blue', value: '#0000FF' }
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]); // update state when adding new colors
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
