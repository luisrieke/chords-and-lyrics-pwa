import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const Overkill = () => {
  const songUrl = "https://chordsandlyrics.app/overkill";
  const [buttonText, setButtonText] = useState("Share");
  const [showChords, setShowChords] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Overkill - Colin Hay",
          text: "Check out the chords and lyrics for Overkill by Colin Hay!",
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
        <title>Overkill - Colin Hay</title>
        <meta
          name="description"
          content="Chords and lyrics for Overkill by Colin Hay"
        />
      </HelmetProvider>
      <div className="title-container">
        <h1>Overkill - Colin Hay</h1>
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
              <div className="chord">
                <span>D</span>
                <img src="/chords/d.png" alt="D chord" />
              </div>
              <div className="chord">
                <span>A/C#</span>
                <img src="/chords/ac-sharp.png" alt="A/C# chord" />
              </div>
              <div className="chord">
                <span>C</span>
                <img src="/chords/c.png" alt="C chord" />
              </div>
              <div className="chord">
                <span>G/B</span>
                <img src="/chords/gb.png" alt="G/B chord" />
              </div>
              <div className="chord">
                <span>Bm</span>
                <img src="/chords/bm.png" alt="Bm chord" />
              </div>
              <div className="chord">
                <span>Asus4</span>
                <img src="/chords/asus4.png" alt="Asus4 chord" />
              </div>
              <div className="chord">
                <span>A</span>
                <img src="/chords/a.png" alt="A chord" />
              </div>
              <div className="chord">
                <span>F#sus4</span>
                <img src="/chords/f-sharpsus4.png" alt="F#sus4 chord" />
              </div>
              <div className="chord">
                <span>F#7</span>
                <img src="/chords/f-sharp7.png" alt="F#7 chord" />
              </div>
              <div className="chord">
                <span>G</span>
                <img src="/chords/g.png" alt="G chord" />
              </div>
            </div>
          )}
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
        <div className="hint">
          Hint: The wonderful Colin Hay also explained his own chords in this{" "}
          <a
            href="https://www.youtube.com/watch?v=yWbjnuWU4iQ"
            target="_blank"
            rel="noreferrer"
          >
            video
          </a>
          .
        </div>
      </div>

      {/* Verse 1 */}

      <p className="verse-chorus-title">[Verse 1]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; I can't get to sleep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        G/B
      </p>
      <p>&nbsp; &nbsp; I think about the implications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; Of diving in too deep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; And possibly the complications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; Especially at night</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        G/B
      </p>
      <p>&nbsp; &nbsp; I worry over situations</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; I know will be alright</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; Perhaps its just my imagination</p>

      {/* Chorus 1 */}

      <p className="verse-chorus-title">[Chorus 1]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        Asus4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>

      {/* Verse 2 */}

      <p className="verse-chorus-title">[Verse 2]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; Alone between the sheets</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; Only brings exasperation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; It's time to walk the streets</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; Smell the, ... desperation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; At least there's pretty lights</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; And though there's little variation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; It nullifies the night</p>
      <p className="chords">C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B</p>
      <p>&nbsp; &nbsp; from overkill</p>

      {/* Chorus 2 */}

      <p className="verse-chorus-title">[Chorus 2]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        Asus4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Come back another day</p>

      {/* Verse 3 */}

      <p className="verse-chorus-title">[Verse 3]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; I can't get to sleep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        G/B
      </p>
      <p>&nbsp; &nbsp; I think about the implications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; Of diving in [ &nbsp; ] too deep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; And possibly the complications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; Especially at night</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; I worry over situations that - I..</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A/C#
      </p>
      <p>&nbsp; &nbsp; I know will be alright</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>&nbsp; &nbsp; It's just overkill</p>

      {/* Chorus 3 */}

      <p className="verse-chorus-title">[Chorus 3]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; Asus4 &nbsp; &nbsp; &nbsp; A
      </p>
      <p>&nbsp; &nbsp; Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
    </div>
  );
};

export default Overkill;
