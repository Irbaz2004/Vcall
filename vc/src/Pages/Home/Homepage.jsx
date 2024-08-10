import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import bg  from '/img/bg1.png'
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
     
  
      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to iRuz: Effortless Video Calling at Your Fingertips</h1>
            <p>Experience seamless video calls with MRstudio. Our platform offers unparalleled ease of use, ensuring you stay connected without any hassle.</p>
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="hero-image">
            <img src={bg} alt="Hero" />
          </div>
        </section>
        <section className="join-room">
          <h2>Join a Room</h2>
          <p>Enter a unique room code to start a video call with friends or colleagues. Make sure you have the correct code before joining a room.</p>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Room Code"
            className="input"
          />
          <button onClick={joinRoom} className="join-button">Join Now</button>
        </section>

        <section className="features">
          <div className="feature">
            <img src='https://media.licdn.com/dms/image/D5612AQHrcL3v3vPMzA/article-cover_image-shrink_720_1280/0/1717141576400?e=2147483647&v=beta&t=BFZiPxo_6-aLGFP3gO9Ngkx-JLk-DmmHmxwOg9-IkrU' alt="Feature 1" className="feature-image" />
            <h2>Crystal Clear Audio</h2>
            <p>Our advanced audio technology ensures you hear every word with perfect clarity, making your conversations more effective and enjoyable.</p>
          </div>
          <div className="feature">
            <img src='https://www.softermii.com/assets/uploads/blog/20220112/zoom-video-conferencing-tool@2x.webp' alt="Feature 2" className="feature-image" />
            <h2>High-Definition Video</h2>
            <p>Enjoy high-definition video quality that makes you feel like you are in the same room with your colleagues, friends, or family.</p>
          </div>
          <div className="feature">
            <img src='https://cdn.dribbble.com/userupload/2769150/file/original-d76de54060ec943fe616b01aaa8ae9f4.png?resize=1200x900' alt="Feature 3" className="feature-image" />
            <h2>video conference</h2>
            <p>Share your screen with a single click and collaborate in real-time. Whether it's for work or play, our screen sharing feature is designed to be effortless.</p>
          </div>
        </section>


        <div className="container">
  <header className="header">
    <h1>Join Your Next Video Call: Connect Anytime, Anywhere</h1>
    <div className="badge">VideoMeet</div>
    <div className="subheader">
      Seamless video conferencing for personal and professional use.
    </div>
  </header>
  
  <div className="stats">
    <div className="stat">
      <span>+5.0</span>
      <p>Rating in App</p>
    </div>
    <div className="stat">
      <span>1M+</span>
      <p>Active Users</p>
    </div>
    <div className="stat">
      <span>500K+</span>
      <p>Meetings Held</p>
    </div>
    <div className="stat">
      <span>99.9%</span>
      <p>Uptime</p>
    </div>
  </div>
  
  <div className="features">
    <div className="feature">
      <p>High Quality Video</p>
      <div className="feature-content">
        <span>Crystal Clear</span>
      </div>
    </div>
    <div className="feature">
      <p>Secure Connections</p>
      <div className="feature-content">
        <span>End-to-End Encryption</span>
      </div>
    </div>
  </div>
  
  <footer className="footer">
    <div className="footer-item">Zoom</div>
    <div className="footer-item">Microsoft Teams</div>
    <div className="footer-item">Google Meet</div>
    <div className="footer-item">Cisco Webex</div>
  </footer>
</div>


             </main>
      <footer className="footer">
        <p>&copy; 2024 iRuz. All rights reserved.</p>
      </footer>
    </div>
  );
}
