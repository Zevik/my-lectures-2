import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText: React.FC = () => {
  const fullText = "הרצאות וסדנאות מקצועיות על בינה מלאכותית, כלים טכנולוגיים וכל הסודות לעצמאים";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // התחל את האנימציה אחרי דיליי קצר
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (hasStarted && currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // מהירות הקלדה - 50ms בין כל תו

      return () => clearTimeout(timer);
    } else if (hasStarted && currentIndex >= fullText.length) {
      setIsComplete(true);
    }
  }, [currentIndex, fullText, hasStarted]);

  // אם האנימציה עדיין לא התחילה, החזר div ריק
  if (!hasStarted) {
    return <div className="min-h-[4rem] flex items-center justify-center" />;
  }

  return (
    <div className="relative min-h-[4rem] flex items-center justify-center">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="inline-block text-center"
      >
        {displayedText}
        
        {/* Cursor animation */}
        <AnimatePresence>
          {!isComplete && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block w-0.5 h-6 bg-white ml-1 align-middle"
            />
          )}
        </AnimatePresence>
      </motion.span>

      {/* Completion effect */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            className="absolute -top-2 -right-2"
          >
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkle effects */}
      {isComplete && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                scale: 0, 
                opacity: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 20 - 10
              }}
              animate={{ 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                y: [0, -20]
              }}
              transition={{ 
                duration: 2,
                delay: 1 + i * 0.2,
                ease: "easeOut"
              }}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedText;