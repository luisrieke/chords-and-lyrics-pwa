import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const DreamCatchMe = () => {
  const songUrl = "https://chordsandlyrics.app/dream-catch-me";
  const [buttonText, setButtonText] = useState("Share");
  const [showChords, setShowChords] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Dream Catch Me - Newton Faulkner",
          text: "Check out the chords and lyrics for Dream Catch Me by Newton Faulkner!",
          url: songUrl,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
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
        <title>Dream Catch Me - Newton Faulkner</title>
        <meta
          name="description"
          content="Chords and lyrics for Dream Catch Me by Newton Faulkner"
        />
      </HelmetProvider>
      <div className="title-container">
        <h1>Dream Catch Me - Newton Faulkner</h1>
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
                <span>G</span>
                <img src="/chords/g.png" alt="G chord" />
              </div>
              <div className="chord">
                <span>C</span>
                <img src="/chords/c.png" alt="C chord" />
              </div>
              <div className="chord">
                <span>Am7</span>
                <img src="/chords/am7.png" alt="Am7 chord" />
              </div>
              <div className="chord">
                <span>Em</span>
                <img src="/chords/em.png" alt="Em chord" />
              </div>
              <div className="chord">
                <span>D</span>
                <img src="/chords/d.png" alt="D chord" />
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
        <div className="hint">Hint: Capo 7th fret.</div>
      </div>

      {/* Intro */}

      <p className="verse-chorus-title">[Intro]</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; ~repeat 2x
      </p>

      {/* Verse 1 */}

      <p className="verse-chorus-title">[Verse 1]</p>
      <p className="chords">G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C</p>
      <p>&nbsp; &nbsp; Every time</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>&nbsp; &nbsp; I close my eyes</p>
      <p className="chords">&nbsp; &nbsp; &nbsp; Am7</p>
      <p>It's you</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>and I know now</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; Em
      </p>
      <p>Who I am</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Am7
      </p>
      <p>yea yea yea</p>
      <p className="chords">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
      <p>And I know now</p>

      {/* Chorus 1 */}

      <p className="verse-chorus-title">[Chorus 1]</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; There's a place I go when I'm alone</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
      </p>
      <p>Do anything I want, be anyone I wanna be</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>But it is us I see, and I cannot believe I'm falling</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; That's where I'm going, where are you going</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; Em
      </p>
      <p>Hold it close won't let this go</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me, yea</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Am7
        &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me when I fall</p>
      <p>Or else I won't come back at all</p>

      {/* Verse 2 */}

      <p className="verse-chorus-title">[Verse 2]</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>You do so much</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        C
      </p>
      <p>that you don't know</p>
      <p className="chords">&nbsp; &nbsp; &nbsp; &nbsp; Am7</p>
      <p>It's true</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>and I know now</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; Em
      </p>
      <p>Who I am</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Am7
      </p>
      <p>yea yea yea</p>
      <p className="chords">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
      <p>And I know now</p>

      {/* Chorus 2 */}

      <p className="verse-chorus-title">[Chorus 2]</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; There's a place I go when I'm alone</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
      </p>
      <p>Do anything I want, be anyone I wanna be</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>But it is us I see, and I cannot believe I'm falling</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; That's where I'm going, where are you going</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; Em
      </p>
      <p>Hold it close won't let this go</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me, yea</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Am7
        &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me when I fall</p>
      <p>Or else I won't come back at all</p>

      {/* Bridge */}

      <p className="verse-chorus-title">[Bridge]</p>
      <p className="chords">
        Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>&nbsp; &nbsp; See you as a mountain, a fountain of God</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
      </p>
      <p>See you as a descant soul in the setting sun</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>You as the sound, as the sight of us love</p>
      <p className="chords">D</p>
      <p>&nbsp; &nbsp; I'm young</p>

      {/* Chorus 3 */}

      <p className="verse-chorus-title">[Chorus 3]</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; There's a place I go when I'm alone</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
      </p>
      <p>Do anything I want, be anyone I wanna be</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>But it is us I see, and I cannot believe I'm falling</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; D
      </p>
      <p>&nbsp; &nbsp; That's where I'm going, where are you going</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; Em
      </p>
      <p>Hold it close won't let this go</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me, yea</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Am7
        &nbsp; &nbsp; &nbsp; &nbsp; C
      </p>
      <p>Dream catch me when I fall</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>Or else I won't come back at all</p>
    </div>
  );
};

export default DreamCatchMe;
