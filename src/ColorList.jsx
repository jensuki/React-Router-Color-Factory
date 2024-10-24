/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({ colors }) {
    return (
        <div className="ColorList">
            <h1>Welcome to the color factory</h1>
            <Link to="/colors/new">Add a color</Link>
            <div className="ColorList-choices">
                <h3>Please select a color</h3>
                <ul>
                    {colors.map(color => (
                        <li key={color.name}>
                            <Link to={`/colors/${color.name}`}>{color.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ColorList;