# Klemmari

## Built With
[![Microsoft Azure](https://custom-icon-badges.demolab.com/badge/Microsoft%20Azure-0089D6?logo=msazure&logoColor=white)](#)
[![ChatGPT](https://img.shields.io/badge/ChatGPT-74aa9c?logo=openai&logoColor=white)](#)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Flask](https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](#)

## How to Run
1. Install the latest LTS version of Node.js from the [official website](https://nodejs.org/en).
2. Clone the repository to your local machine.
3. Navigate to the project directory and install the dependencies for the frontend:
    ```bash
    npm install
    ```
4. Install the Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Create a ```.env``` file in the root directory and fill it according to ```.env.example```:
    ```bash
    cp .env.example .env
    ```
6. Start the Vite development server to access the frontend:
    ```bash
    npm run dev
    ```
7. Open another terminal to start the Flask-server:
   ```bash
    python src/Azure.py
   ```

## About the Website
Klemmari is a web application designed to simulate a patient information system. The website features an AI-powered chatbot that helps users by answering questions and providing assistance with navigating the site. The AI is powered by the GPT-4o model and is built using a **Retrieval-Augmented Generation (RAG)** architecture, which enhances its ability to retrieve relevant information and generate contextually appropriate responses.

## Known bugs
Language model / default prompt still need some optimizing since chatbot doesn't always understand the user's question
