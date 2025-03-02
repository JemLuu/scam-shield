import { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file

export default function GrandmaPage() {
  const [transcripts, setTranscripts] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5050/ws/transcripts");

    ws.onmessage = (event) => {
      const newTranscript = JSON.parse(event.data);
      setTranscripts((prev) => [newTranscript, ...prev]);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="app-container">
      <img src="/stickers/couple.png" className="sticker left top rotate-small" alt="Sticker" />
      <img src="/stickers/heart.png" className="sticker left bottom rotate-large" alt="Sticker" />
      <img src="/stickers/couple2.png" className="sticker right top rotate-medium" alt="Sticker" />
      <img src="/stickers/letters.png" className="sticker right bottom rotate-small" alt="Sticker" />
      
      <div className="grandma-container">
        <img src="/stickers/grandma.png" className="grandma-sticker" alt="Grandma Sticker" />
      </div>
      
      <div className="transcript-box">
        {transcripts.length === 0 ? (
          <p className="placeholder-text">Waiting for transcripts...</p>
        ) : (
          <ul className="transcript-list">
            {transcripts.map((transcript, index) => (
              <li
                key={index}
                className={`transcript-item ${
                  transcript.startsWith("(Scam)") ? "scam-text" : "normal-text"
                }`}
              >
                {transcript}
                {transcript.startsWith("(Scam)") && " 🚨"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
