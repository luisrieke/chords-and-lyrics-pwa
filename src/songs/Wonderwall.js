import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const Wonderwall = () => {
  const songUrl = "https://chordsandlyrics.app/wonderwall";
  const [buttonText, setButtonText] = useState("Share");
  const [showChords, setShowChords] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Wonderwall - Oasis",
          text: "Check out the chords and lyrics for Wonderwall by Oasis!",
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
        <title>Wonderwall - Oasis</title>
        <meta
          name="description"
          content="Chords and lyrics for Wonderwall by Oasis"
        />
      </HelmetProvider>
      <div className="title-container">
        <h1>Wonderwall - Oasis</h1>
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
                <span>Em</span>
                <img src="/chords/em.png" alt="Em chord" />
              </div>
              <div className="chord">
                <span>G</span>
                <img src="/chords/g.png" alt="G chord" />
              </div>
              <div className="chord">
                <span>D</span>
                <img src="/chords/d.png" alt="D chord" />
              </div>
              <div className="chord">
                <span>A7sus4</span>
                <img src="/chords/a7sus4.png" alt="A7sus4 chord" />
              </div>
              <div className="chord">
                <span>C</span>
                <img src="/chords/c.png" alt="C chord" />
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
      </div>
      <p>[Verse 1]</p>
      <p className="chords">Em &nbsp; &nbsp; &nbsp; G</p>
      <p>Today is gonna be the day</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7sus4
      </p>
      <p>That they&apos;re gonna throw it back to you</p>
      <p className="chords">Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G</p>
      <p>By now you should&apos;ve somehow</p>
      <p className="chords">
        &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;A7sus4
      </p>
      <p>Realised what you gotta do</p>
      <p className="chords">
        Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>I don&apos;t believe that anybody</p>
      <p className="chords">
        &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7sus4 &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp;C D &nbsp;A7sus4 &nbsp;A7sus4
      </p>
      <p>Feels the way I do about you now</p>
      <p>
        <br />
      </p>
      <p>[Verse 2]</p>
      <p className="chords">Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
      <p>Backbeat the word is on the street</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; A7sus4
      </p>
      <p>That the fire in your heart is out</p>
      <p className="chords">
        Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G
      </p>
      <p>I&apos;m sure you&apos;ve heard it all before</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; A7sus4
      </p>
      <p>But you never really had a doubt</p>
      <p className="chords">
        Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
        &nbsp; &nbsp; &nbsp; D
      </p>
      <p>I don&apos;t believe that anybody feels</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7sus4 &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;Em &nbsp;G &nbsp;D &nbsp;A7sus4
      </p>
      <p>The way I do about you now</p>
      <p>
        <br />
      </p>
      <p>[Pre-Chorus]</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
      </p>
      <p>And all the roads we have to walk are winding</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
      </p>
      <p>And all the lights that lead us there are blinding</p>
      <p className="chords">
        &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D
      </p>
      <p>There are many things that I would</p>
      <p className="chords">G &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp;Em</p>
      <p>Like to say to you</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp;A7sus4
      </p>
      <p>But I don&apos;t know how</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp;Em &nbsp;G
      </p>
      <p>Because maybe</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp;G
      </p>
      <p>You&apos;re gonna be the one that saves me?</p>
      <p className="chords">&nbsp; &nbsp; &nbsp;Em &nbsp; C &nbsp;Em &nbsp;G</p>
      <p>And after all</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp;C
        &nbsp;Em &nbsp;G &nbsp; Em
      </p>
      <p>You&apos;re my wonderwall</p>
      <p>
        <br />
      </p>
      <p>[Verse 3]</p>
      <p className="chords">Em &nbsp; &nbsp; &nbsp; &nbsp;G</p>
      <p>Today was gonna be the day</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7sus4
      </p>
      <p>But they&apos;ll never throw it back to you</p>
      <p className="chords">Em &nbsp; &nbsp; &nbsp; &nbsp; G</p>
      <p>By now you should&apos;ve somehow</p>
      <p className="chords">
        &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;A7sus4
      </p>
      <p>Realised what you&apos;re not to do</p>
      <p className="chords">
        Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
      </p>
      <p>I don&apos;t believe that anybody</p>
      <p className="chords">
        D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7sus4
      </p>
      <p>Feels the way I do</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp;G &nbsp;D &nbsp;A7sus4
      </p>
      <p>About you now</p>
      <p>
        <br />
      </p>
      <p>[Pre-Chorus]</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
      </p>
      <p>And all the roads that lead you there are winding</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
      </p>
      <p>And all the lights that light the way are blinding</p>
      <p className="chords">
        &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; D
        &nbsp; &nbsp; &nbsp;Em
      </p>
      <p>There are many things that I would like to say to you</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp;A7sus4
      </p>
      <p>But I don&apos;t know how</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp;Em &nbsp;G
      </p>
      <p>I said maybe</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp;G
      </p>
      <p>You&apos;re gonna be the one that saves me?</p>
      <p className="chords">&nbsp; &nbsp; &nbsp;Em &nbsp; C &nbsp;Em &nbsp;G</p>
      <p>And after all</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp; C &nbsp; Em &nbsp;G
        &nbsp;Em
      </p>
      <p>You&apos;re my wonderwall</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Em &nbsp; G
      </p>
      <p>I said maybe (I said maybe)</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp;G
      </p>
      <p>You&apos;re gonna be the one that saves me?</p>
      <p className="chords">&nbsp; &nbsp; &nbsp;Em &nbsp; C &nbsp;Em &nbsp;G</p>
      <p>And after all</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em &nbsp; C &nbsp; Em &nbsp;G
        &nbsp;Em
      </p>
      <p>You&apos;re my wonderwall</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Em &nbsp; G
      </p>
      <p>I said maybe (I said maybe)</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Em &nbsp; &nbsp; &nbsp;G
      </p>
      <p>You&apos;re gonna be the one that saves me? (that saves me)</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Em &nbsp; &nbsp; &nbsp;G
      </p>
      <p>You&apos;re gonna be the one that saves me? (that saves me)</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        Em &nbsp; &nbsp; &nbsp;G &nbsp;Em
      </p>
      <p>You&apos;re gonna be the one that saves me? (that saves me)</p>
    </div>
  );
};

export default Wonderwall;
