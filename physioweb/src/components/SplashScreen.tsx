// import React from 'react';
// import { motion } from 'motion/react';

// export function SplashScreen() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center"
//       style={{ backgroundColor: '#DEE8DE' }}
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="flex flex-col items-center"
//       >
//         {/* Logo Text */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-center"
//         >
//           {/* <h1
//             style={{
//               fontSize: '3.5rem',
//               fontWeight: '800',
//               color: 'white',
//               letterSpacing: '0.05em',
//               textShadow: '0 4px 20px rgba(0,0,0,0.2)'
//             }}
//           >
//             Dr. AKHIL'S
//           </h1> */}
//           <img src="./image.png" alt="Logo" style={{ width: '100px', height: '100px' }} />
//           {/* <p
//             style={{
//               fontSize: '1.2rem',
//               fontWeight: '300',
//               color: '#0f8987',
//               letterSpacing: '0.15em',
//               marginTop: '0.5rem'
//             }}
//           >
//             Dr.Akhils
//           </p> */}
//         </motion.div>

//         {/* Loading Animation */}
//         {/* <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//           className="mt-8"
//         >
//           <div className="flex gap-2">
//             {[0, 1, 2].map((index) => (
//               <motion.div
//                 key={index}
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.5, 1, 0.5]
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   repeat: Infinity,
//                   delay: index * 0.15
//                 }}
//                 style={{
//                   width: '12px',
//                   height: '12px',
//                   borderRadius: '50%',
//                   backgroundColor: '#0f8987'
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div> */}
//       </motion.div>
//     </motion.div>
//   );
// }
import React from "react";
import { motion } from "motion/react";

const ringSize = 140;
const ringBorder = 3;

export const SplashScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "#DEE8DE" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        {/* Logo with Loader Ring */}
        <div className="relative flex items-center justify-center">

          {/* Animated Circular Loader */}
          <motion.div
            style={{
              position: "absolute",
              width: ringSize,
              height: ringSize,
              borderRadius: "50%",
              border: `${ringBorder}px solid rgba(36, 236, 233, 0.25)`,
              borderTopColor: "#6cdbd9",
              borderLeftColor: "transparent",
              boxSizing: "border-box",

            }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />

          {/* Logo */}
          <img
            src="/image.png"
            alt="Logo"
            style={{
              width: 100,
              height: 100,
              padding: '8px',
              zIndex: 10
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};