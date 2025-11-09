"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TypewriterEffect = ({
 words,
 className,
 cursorClassName,
}: {
 words: {
 text: string;
 className?: string;
 }[];
 className?: string;
 cursorClassName?: string;
}) => {
 const [currentWordIndex, setCurrentWordIndex] = useState(0);
 const [currentWord, setCurrentWord] = useState(words[currentWordIndex].text);
 const [currentCharIndex, setCurrentCharIndex] = useState(0);
 const [typingDirection, setTypingDirection] = useState<"forward" | "backward">("forward");

 useEffect(() => {
 if (typingDirection === "forward") {
 if (currentCharIndex < currentWord.length) {
 const timeout = setTimeout(() => {
 setCurrentCharIndex((prev) => prev + 1);
 }, 100);
 return () => clearTimeout(timeout);
 } else {
 const timeout = setTimeout(() => {
 setTypingDirection("backward");
 }, 1500);
 return () => clearTimeout(timeout);
 }
 } else {
 if (currentCharIndex > 0) {
 const timeout = setTimeout(() => {
 setCurrentCharIndex((prev) => prev - 1);
 }, 50);
 return () => clearTimeout(timeout);
 } else {
 const nextWordIndex = (currentWordIndex + 1) % words.length;
 setCurrentWordIndex(nextWordIndex);
 setCurrentWord(words[nextWordIndex].text);
 setTypingDirection("forward");
 }
 }
 }, [currentCharIndex, currentWord, currentWordIndex, typingDirection, words]);

 return (
 <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold", className)}>
 <AnimatePresence>
 <motion.span
 key={currentWord}
 className={cn(words[currentWordIndex].className)}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.5 }}
 >
 {currentWord.substring(0, currentCharIndex)}
 </motion.span>
 </AnimatePresence>
 <motion.span
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
 className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
 ></motion.span>
 </div>
 );
};