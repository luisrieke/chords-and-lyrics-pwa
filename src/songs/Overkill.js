import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const Overkill = () => {
  const songUrl = "https://chordsandlyrics.app/overkill";
  const [buttonText, setButtonText] = useState("Share");

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
      <div className="chord-images">
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
      <p>[Verse]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>I can't get to sleep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>I think about the implications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>Of diving in too deep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>And possibly the complications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>Especially at night</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>I worry over situations</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>I know will be alright</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>Perhaps its just my imagination</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        Asus4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>
        <br />
      </p>
      <p>[Verse]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>Alone between the sheets</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/B
      </p>
      <p>Only brings exasperation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>It's time to walk the streets</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>Smell the, ... desperation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>At least there's pretty lights</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>And though there's little variation</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>It nullifies the night</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>from overkill</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        Asus4 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>Come back another day</p>
      <p>
        <br />
      </p>
      <p>[Verse]</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>I can't get to sleep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>I think about the implications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>Of diving in too deep</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>And possibly the complications</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>Especially at night</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>I worry over situations tha-at...</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A/C#
      </p>
      <p>I know will be alright</p>
      <p className="chords">
        C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G/B
      </p>
      <p>It's just overkill</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Day after day it reappears</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Asus4
        &nbsp; A
      </p>
      <p>Night after night my heartbeat shows the fear</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
      <p className="chords">
        F#sus4 &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Ghosts appear and fade away</p>
    </div>
  );
};

export default Overkill;
