import React from 'react';

const SaveButton = ({ maxLabel, methodLabel }) => {

    const handleSave = async (event) => {
        event.preventDefault();
        const currentDate = new Date();
        const data = {
            date: currentDate,
            method: methodLabel,
            alternatif: maxLabel,
        };

        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Data saved successfully');
        } else {
            alert('Failed to save data');
        }
    };

    return (
        <button onClick={handleSave} className="bg-yellow-500 Poppins-light rounded-lg text-black p-2 w-full">
            Save
        </button>
    );
};

export default SaveButton;
