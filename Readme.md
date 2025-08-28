# 🛡️ Scam Shield

Real-time phone call scam detection using AI voice analysis.

## Features

- **Live Scam Detection** - AI-powered analysis of phone calls in real-time
- **Web Dashboard** - Monitor call transcripts and scam alerts
- **Twilio Integration** - Seamless phone system connectivity
- **OpenAI GPT-4** - Advanced language model for scam pattern recognition

## Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- Twilio account
- OpenAI API key
- ngrok for tunneling

### Setup

1. **Environment Variables**
   ```bash
   # Create .env file
   OPENAI_API_KEY=your_openai_key_here
   PORT=5050
   ```

2. **Install Dependencies**
   ```bash
   # Backend
   pip install -r requirements.txt
   
   # Frontend
   cd frontend && npm install
   ```

3. **Run the Application**
   ```bash
   # Terminal 1: Start ngrok tunnel
   ngrok http 5050
   
   # Terminal 2: Start backend
   python main.py
   
   # Terminal 3: Start frontend
   cd frontend && npm start
   ```

4. **Configure Twilio**
   - Update your Twilio phone number webhook URL to: `https://your-ngrok-url.ngrok.io/incoming-call`

## Usage

1. Call your Twilio phone number
2. Open `http://localhost:3000` and login to view the dashboard
3. Watch real-time transcript analysis with scam detection alerts

## Tech Stack

- **Backend**: Python, FastAPI, WebSockets
- **Frontend**: React, WebSocket client
- **AI**: OpenAI GPT-4 Realtime API
- **Telephony**: Twilio Voice API
- **Tunneling**: ngrok