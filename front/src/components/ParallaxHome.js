// import React from "react";
// import { Parallax } from "react-parallax";
// import { NavLink } from 'react-router-dom'
// // import Hello from "./Hello";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// const insideStyles = {
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-80%,-50%)"
// };
// const image1 =
//   "";
// const image2 =
//   "";
// const image3 =
//   "";
// const image4 =
//   "";

// const ParallaxHome = () => (
//   <div style={styles}>\
//     {/* <Hello name="Parallax" /> */}
//     <Parallax bgImage={image1} strength={50}>
//       <div style={{ height: 500 }}>
     
//       </div>
//     </Parallax>

//     <Parallax bgImage={image3} blur={{ min: -5, max: 15}}>
//       <div style={{ height: 50 }}>
//         <div style={insideStyles}><NavLink to="/products">Shop Now</NavLink></div>
//       </div>
//     </Parallax>
    
//     <Parallax bgImage={image2} strength={-100}>
//       <div style={{ height: 500 }}>
     
//       </div>
//     </Parallax>
 
//     <Parallax
//       bgImage={image4}
//       strength={200}
//       renderLayer={percentage => (
//         <div>
//           <div
//             style={{
//               position: "absolute",
//               background: `rgba(255, 125, 0, ${percentage * 5})`,
//               left: "50%",
//               top: "50%",
//               borderRadius: "50%",
//               transform: "translate(-100%,-50%)",
//               width: percentage * 500,
//               height: percentage * 500
//             }}
//           />
//         </div>
//       )}
//     >
//       {/* <div style={{ height: 500 }}>
//         <div style={insideStyles}>renderProp</div>
//       </div> */}
//     </Parallax>
    

//   </div>
// );

// export default ParallaxHome;