import axios from 'axios';
import React, { useState } from 'react';

function RegisterColorPage(props) {
    const [ color, setColor ] = useState({
        colorName: "",
    });

    const handleInputChange = (e) => {
        setColor(color => {
            return {
                ...color,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmitClick = async () => {

        const response = await axios.post("http://localhost:8080/api/v1/color", color);

    }

    return (
        <div>
            <h1>컬러 등록 페이지</h1>
            <p>
                <label htmlFor=''>컬러명</label>
                <input type='text'
                name='colorName'
                onChange={handleInputChange}
                value={color.colorName}
                />
            </p>
            <p>
                <button onClick={handleSubmitClick}>등록</button>
            </p>
        </div>
    );
}

export default RegisterColorPage;