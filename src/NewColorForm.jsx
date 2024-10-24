/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewColorForm.css';

function NewColorForm({ addColor }) {
    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState('#000000');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({
            name: colorName,
            value: colorValue
        });
        navigate('/colors');  // redirect back to /colors
    };

    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="colorName">Color Name:</label>
                    <input
                        id="colorName"
                        type="text"
                        name="colorName"
                        value={colorName}
                        onChange={(e) => setColorName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="colorValue">Pick a Color:</label>
                    <input
                        id="colorValue"
                        type="color"
                        name="colorvalue"
                        value={colorValue}
                        onChange={(e) => setColorValue(e.target.value)} />
                </div>
                <button>Add Color</button>
            </form>
        </div>
    );
}

export default NewColorForm;
