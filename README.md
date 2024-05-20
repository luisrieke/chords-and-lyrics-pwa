# Chords & Lyrics 🎸

## Overview

**Chords & Lyrics** is a small web app designed to provide easy access to chords and lyrics for my favorite songs. It features an automatic scrolling functionality, making it convenient to follow along while playing or singing.

## Features

- **Automatic Scrolling:** Automatically scrolls through the lyrics at a customizable speed.
- **Day/Night Mode:** Switch between day and night modes for better visibility depending on the lighting conditions.
- **Song List:** A start page that lists all available songs with links to their individual pages.
- **Home Button:** Easily navigate back to the home page from any song page.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/luisrieke/chords-and-lyrics-pwa.git
   cd chords-and-lyrics
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm start
   ```

4. **Build the app for production:**
   ```bash
   npm run build
   ```

## Project Structure

Here's an overview of the project structure:

```
chords-and-lyrics/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── songs/
│   │   ├── Overkill.js
│   │   └── Wonderwall.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── ...
├── package.json
└── README.md
```

## Components

- **Home:** The main landing page that lists all available songs.
- **SongLayout:** A layout component for song pages that includes mode switching and scroll controls.
