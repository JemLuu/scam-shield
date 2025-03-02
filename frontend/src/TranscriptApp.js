import { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file

export default function TranscriptApp() {
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
      <h1 className="title">Scam-Shield</h1>
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