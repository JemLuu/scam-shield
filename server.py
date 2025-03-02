from flask import Flask, request
from twilio.twiml.voice_response import VoiceResponse
import openai
import speech_recognition as sr
import requests

app = Flask(__name__)

# Twilio webhook to handle incoming calls
@app.route("/voice", methods=['POST'])
def voice():
    response = VoiceResponse()
    response.say("This call is being transcribed. Please speak now.")
    
    # Record the call and send it to our transcription function
    response.record(transcribe_callback="/transcribe")

    return str(response)

# Handle transcription (Google Speech-to-Text or Whisper API)
@app.route("/transcribe", methods=['POST'])
def transcribe():
    audio_url = request.form['RecordingUrl']
    
    # Download the audio file
    audio_data = requests.get(audio_url).content
    with open("call_audio.wav", "wb") as f:
        f.write(audio_data)

    # Transcribe using Google Speech-to-Text (or Whisper)
    recognizer = sr.Recognizer()
    with sr.AudioFile("call_audio.wav") as source:
        audio = recognizer.record(source)
    transcript = recognizer.recognize_google(audio)

    # Send transcript to ChatGPT for scam detection
    chatgpt_response = classify_scam(transcript)

    return f"Transcript: {transcript}\n\n{chatgpt_response}"

# Function to classify scam calls using ChatGPT
def classify_scam(text):
    openai.api_key = "your_openai_api_key"
    
    prompt = f"""
    Analyze the following phone call transcript and classify it as either 'Scam' or 'Legitimate'. 
    Explain your reasoning:
    {text}
    """
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": prompt}]
    )

    return response["choices"][0]["message"]["content"]

if __name__ == "__main__":
    app.run(debug=True, port=5000)