import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { increaseFontSize, decreaseFontSize } from "../fontResizer";

const Help = () => {
  const songUrl = "https://chordsandlyrics.app/help";
  const [buttonText, setButtonText] = useState("Share");
  const [showChords, setShowChords] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Help - The Beatles",
          text: "Check out the chords and lyrics for Help by The Beatles!",
          url: songUrl,
        })
        .catch((error) => console.error("Error sharing", error));
    } else {
      navigator.clipboard
        .writeText(songUrl)
        .then(() => {
          setButtonText("Copied ✅");
          setTimeout(() => setButtonText("Share"), 2000);
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
        <Helmet>
          <title>Help - The Beatles</title>
          <meta
            name="description"
            content="Chords and lyrics for Help by The Beatles"
          />
        </Helmet>
      </HelmetProvider>
      <div className="title-container">
        <h1>Help - The Beatles</h1>
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
                <span>Bm</span>
                <img src="/chords/bm.png" alt="Bm chord" />
              </div>
              <div className="chord">
                <span>Bm/A</span>
                <img src="/chords/bma.png" alt="Bm/A chord" />
              </div>
              <div className="chord">
                <span>G</span>
                <img src="/chords/g.png" alt="G chord" />
              </div>
              <div className="chord">
                <span>G/F#</span>
                <img src="/chords/gf-sharp.png" alt="G/F# chord" />
              </div>
              <div className="chord">
                <span>E</span>
                <img src="/chords/e.png" alt="E chord" />
              </div>
              <div className="chord">
                <span>A</span>
                <img src="/chords/a.png" alt="A chord" />
              </div>
              <div className="chord">
                <span>C#m</span>
                <img src="/chords/c-sharpm.png" alt="C#m chord" />
              </div>
              <div className="chord">
                <span>F#m</span>
                <img src="/chords/f-sharpm.png" alt="F#m chord" />
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
      </div>
      <p>[Intro]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; Bm/A
      </p>
      <p>Help! I need somebody</p>
      <p className="chords">
        G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; G/F#
      </p>
      <p>Help! Not just anybody</p>
      <p className="chords">E</p>
      <p>Help! You know I need someone,</p>
      <p className="chords">A</p>
      <p>Help!</p>
      <p>
        <br />
      </p>
      <p>[Verse 1]</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
      </p>
      <p>When I was younger, so much younger than today,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; A
      </p>
      <p>I never needed anybody's help in any way.</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
      </p>
      <p>But now those days are gone I'm not so self-assured,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp;
        G &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>Now I find I've changed my mind, I've opened up the doors.</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm/A &nbsp; G &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; G/F#
      </p>
      <p>
        Help me if you can I'm feeling down, and I do appreciate you being
        'round.
      </p>
      <p className="chords">
        E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>
        Help me get my feet back on the ground, won't you please please help me.
      </p>
      <p>
        <br />
      </p>
      <p>[Verse 2]</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; F#m
      </p>
      <p>And now my life has changed in oh so many ways,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
        &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; A
      </p>
      <p>My independence seemed to vanish in the haze.</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; F#m
      </p>
      <p>But every now and then I feel so insecure,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
        &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>I know that I just need you like I've never done before.</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm/A &nbsp; G &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        G/F#
      </p>
      <p>
        Help me if you can I'm feeling down, and I do appreciate you being
        'round.
      </p>
      <p className="chords">
        E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>
        Help me get my feet back on the ground, won't you please please help me.
      </p>
      <p>
        <br />
      </p>
      <p>[Verse 3]</p>
      <p className="chords">
        A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; F#m
      </p>
      <p>When I was younger, so much younger than today,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
        &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; A
      </p>
      <p>I never needed anybody's help in any way.</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; F#m
      </p>
      <p>But now those days are gone I'm not so self-assured,</p>
      <p className="chords">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
        &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>Now I find I've changed my mind, I've opened up the doors.</p>
      <p>
        <br />
      </p>
      <p>[Chorus]</p>
      <p className="chords">
        Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm/A &nbsp; G &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        G/F#
      </p>
      <p>
        Help me if you can I'm feeling down, and I do appreciate you being
        'round.
      </p>
      <p className="chords">
        E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
      </p>
      <p>
        Help me get my feet back on the ground, won't you please please help me.
      </p>
      <p className="chords">A &nbsp; &nbsp; F#m</p>
      <p>Help me, help me, ooo.</p>
    </div>
  );
};

export default Help;
