import React from "react";
import "./App.css";

function App() {
  const friendName = "Vishu"; // Replace with your friend's name
  const birthdayDate = "December 7"; // Replace with their birthday date

  return (
    <div className="birthday-card">
      <div className="card">
        <div className="card-front">
          <h1 className="happy">🎉 HAPPY BIRTHDAY! 🎂</h1>
          <div className="balloons">
            <div className="balloon balloon-1"></div>
            <div className="balloon balloon-2"></div>
            <div className="balloon balloon-3"></div>
            <div className="balloon balloon-4"></div>
          </div>
          <div className="confetti"></div>
        </div>
        <div className="card-inside">
          <h3 className="wish">Dear {friendName},</h3>
          <p className="message">
            Wishing you an amazing birthday on <b>{birthdayDate}</b>! 🎊 May
            this year bring you happiness, success, and all the things you love.
            💖
          </p>
          <p className="signature">- Gokul</p>
        </div>
      </div>
    </div>
  );
}

export default App;
