import React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const joinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value.trim()}`);
    }
  }, [navigate, value]);

  return (
    <div className="container">
      <h1 className="title">iRuz Video Call</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Room Code"
      />
      <button onClick={joinRoom}>Join</button>
    </div>
  );
}
