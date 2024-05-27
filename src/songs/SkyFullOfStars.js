import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const SkyFullOfStars = () => {
  const songUrl = "https://chordsandlyrics.app/skyfullofstars";
  const [buttonText, setButtonText] = useState("Share");
  const [showChords, setShowChords] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Sky Full of Stars - Coldplay",
          text: "Check out the chords and lyrics for Sky Full of Stars by Coldplay!",
          url: songUrl,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      navigator.clipboard
        .writeText(songUrl)
        .then(() => {
          setButtonText("Copied ✅");
          setTimeout(() => setButtonText("Share"), 2000); // Reset after 2 seconds
        })
        .catch((error) => console.error("Error copying URL", error));
    }
  };

  const handleUrlClick = (e) => {
    e.target.select();
  };

  const toggleChords = () => {
    setShowChords(!showChords);
  };

  return (
    <div className="text-container">
      <HelmetProvider>
        <title>Sky Full of Stars - Coldplay</title>
        <meta
          name="description"
          content="Chords and lyrics for Sky Full of Stars by Coldplay."
        />
      </HelmetProvider>
      <div className="title-container">
        <h1>Sky Full of Stars - Coldplay</h1>
        <Link to="/">
          <div className="chords-and-lyrics">Chords & Lyrics</div>
        </Link>
      </div>
      <div className="share-container">
        <input
          type="text"
          value={songUrl}
          className="song-url"
          readOnly
          onClick={handleUrlClick}
        />
        <button className="share-button" onClick={handleShare}>
          {buttonText}
        </button>
      </div>
      <div className="song-meta-section">
        <div className="chord-section">
          <div>
            <button onClick={toggleChords}>
              {showChords ? "Hide chords" : "Show chords"}
            </button>
          </div>
          {showChords && (
            <div className="chords-listed">
              <div className="chord-text">
                <span>C#m</span>
                <pre>e|-0----|</pre>
                <pre>B|-0----|</pre>
                <pre>G|-9----|</pre>
                <pre>D|-11---|</pre>
                <pre>A|-11---|</pre>
                <pre>E|-x----|</pre>
              </div>
              <div className="chord-text">
                <span>A</span>
                <pre>e|-0----|</pre>
                <pre>B|-0----|</pre>
                <pre>G|-6----|</pre>
                <pre>D|-7----|</pre>
                <pre>A|-7----|</pre>
                <pre>E|-x----|</pre>
              </div>
              <div className="chord-text">
                <span>E</span>
                <pre>e|-0----|</pre>
                <pre>B|-0----|</pre>
                <pre>G|-1----|</pre>
                <pre>D|-2----|</pre>
                <pre>A|-2----|</pre>
                <pre>E|-x----|</pre>
              </div>
              <div className="chord-text">
                <span>G#m</span>
                <pre>e|-0----|</pre>
                <pre>B|-0----|</pre>
                <pre>G|-4----|</pre>
                <pre>D|-6----|</pre>
                <pre>A|-6----|</pre>
                <pre>E|-x----|</pre>
              </div>
              <div className="chord-text">
                <span>B</span>
                <pre>e|-0----|</pre>
                <pre>B|-0----|</pre>
                <pre>G|-8----|</pre>
                <pre>D|-9----|</pre>
                <pre>A|-9----|</pre>
                <pre>E|-x----|</pre>
              </div>
            </div>
          )}
        </div>
        <div className="hint">
          Hint: Watch this{" "}
          <a
            href="https://www.youtube.com/watch?v=VPRjCeoBqrI"
            target="_blank"
            rel="noreferrer"
          >
            video
          </a>{" "}
          for the official music video by Coldplay.
        </div>
        <div className="font-size-controls">
          <h2>font size:</h2>
          <button
            className="font-size-controls-button"
            onClick={increaseFontSize}
          >
            +
          </button>
          <button
            className="font-size-controls-button"
            onClick={decreaseFontSize}
          >
            -
          </button>
        </div>
      </div>
      <p className="chords">C#m &nbsp; A &nbsp; E &nbsp; G#m ~repeat 4x</p>
      <p>[Verse]</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause you're a sky, cause you're a sky full of stars</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I'm gonna give you my heart</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause you're a sky, cause you're a sky full of stars</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause you light up the path</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I don't care, go on and tear me apart</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I don't care if you do</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause in a sky, cause in a sky full of stars</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I think I saw you</p>
      <p className="chords">C#m &nbsp; A &nbsp; E &nbsp; G#m ~repeat 3x</p>
      <p>
        <br />
      </p>
      <p>[Verse]</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause you're a sky, cause you're a sky full of stars</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I wanna die in your arms, arms</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause you get lighter the more it gets dark</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I'm gonna give you my heart</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>And I don't care, go on and tear me apart</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>And I don't care if you do</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>'Cause in a sky, cause in a sky full of stars</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I think I see you</p>
      <p className="chords">
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m
      </p>
      <p>I think I see you</p>
      <p className="chords">C#m &nbsp; A &nbsp; E &nbsp; G#m ~repeat 4x</p>
      <p className="chords">A &nbsp; B &nbsp; C#m &nbsp; ~repeat 2x</p>
      <p>
        <br />
      </p>
      <p>[Outro]</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (C#m)
      </p>
      <p>Because you're a sky, you're a sky full of stars</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (C#m)
      </p>
      <p>Such a heavenly view</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (C#m)
      </p>
      <p>You're such a heavenly view</p>
    </div>
  );
};

export default SkyFullOfStars;
