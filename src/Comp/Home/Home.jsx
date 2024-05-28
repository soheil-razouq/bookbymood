import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const moods = [
    { label: 'CHEERFUL', emoji: '😁' },
    { label: 'REFLECTIVE', emoji: '🤔' },
    { label: 'GLOOMY', emoji: '😔' },
    { label: 'HUMOROUS', emoji: '🤣' },
    { label: 'MELANCHOLY', emoji: '😟' },
    { label: 'IDYLLIC', emoji: '😌' },
    { label: 'CHILL', emoji: '😎' },
    { label: 'ROMANTIC', emoji: '🥰' },
    { label: 'WEIRD', emoji: '😜' },
    { label: 'HORNY', emoji: '😏' },
    { label: 'SLEEPY', emoji: '😴' },
    { label: 'ANGRY', emoji: '😡' },
    { label: 'FEARFUL', emoji: '😱' },
    { label: 'LONELY', emoji: '😞' },
    { label: 'TENSE', emoji: '😬' },
    { label: 'THOUGHTFUL', emoji: '🤓' },
    { label: 'THRILL-SEEKING', emoji: '😜' },
    { label: 'PLAYFUL', emoji: '😋' },
  ];

  const ToBookListPage = (label) => {
    navigate(`/BookList/${label}`);
  }

  return (
    <div className="container">
      <h1>Discover top-rated Books based on your mood</h1>
      <h2>How are you feeling now?</h2>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button key={index} className="mood-button" onClick={() => ToBookListPage(mood.label)}>
            <span role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>{' '}
            {mood.label}
          </button>
        ))}
      </div>

      <div className="footer">
        <p>Made by Soheil ❤️</p>
      </div>
    </div>
  );
};

export default Home;
