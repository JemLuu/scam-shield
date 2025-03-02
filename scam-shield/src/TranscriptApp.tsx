import { useState, useEffect } from "react";

export default function TranscriptApp() {
  const [transcripts, setTranscripts] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5050/ws/transcripts");

    ws.onmessage = (event) => {
      const newTranscript: string = JSON.parse(event.data);
      setTranscripts((prev) => [newTranscript, ...prev]);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Live Call Transcripts</h1>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
        {transcripts.length === 0 ? (
          <p className="text-gray-500 text-center">Waiting for transcripts...</p>
        ) : (
          <ul className="space-y-2">
            {transcripts.map((transcript, index) => (
              <li key={index} className="p-2 border-b border-gray-300">
                {transcript}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}