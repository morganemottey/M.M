import React from "react";
import { Parallax } from "react-parallax";
import { NavLink } from 'react-router-dom'
// import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-80%,-50%)"
};
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const ParallaxHome = () => (
  <div style={styles}>
    {/* <Hello name="Parallax" /> */}
    <Parallax bgImage={image1} strength={50}>
      <div style={{ height: 500 }}>
     
      </div>
    </Parallax>

    <Parallax bgImage={image3} blur={{ min: -5, max: 15}}>
      <div style={{ height: 50 }}>
        <div style={insideStyles}><NavLink to="/products">Shop Now</NavLink></div>
      </div>
    </Parallax>
    
    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
     
      </div>
    </Parallax>
 
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 0, ${percentage * 5})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-100%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      {/* <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div> */}
    </Parallax>
    

  </div>
);

export default ParallaxHome;