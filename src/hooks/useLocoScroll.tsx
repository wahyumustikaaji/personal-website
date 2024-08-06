// "use client";

// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// export default function useLocoScroll(start: boolean) {
//   useEffect(() => {
//     if (!start) return;

//     let locoScroll: LocomotiveScroll | null = null;

//     const scrollEl = document.querySelector("#main-container");
//     if (scrollEl) {
//       locoScroll = new LocomotiveScroll({
//         el: scrollEl,
//         smooth: true,
//         multiplier: 1,
//         class: "is-reveal",
//       });
//     }

//     return () => {
//       if (locoScroll) locoScroll.destroy();
//     };
//   }, [start]);
// }
