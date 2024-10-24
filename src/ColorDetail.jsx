/* eslint-disable react/prop-types */
import { useParams, Navigate, Link } from 'react-router-dom';
import "./ColorDetail.css";

function ColorDetail({ colors }) {
    const { color } = useParams();
    const currentColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

    // if color not found
    if (!currentColor) {
        return <Navigate to="/colors" />
    }

    return (
        <div className="ColorDetail"
            style={{ backgroundColor: currentColor.value }}>
            <h1>This is {currentColor.name}</h1>
            <Link to="/colors" style={{ color: currentColor.value }}>Go back</Link>
        </div>
    )
}

export default ColorDetail;