"use client";

import { useState, useEffect } from "react";

export function TypewriterEffect({ phrases }: { phrases: string[] }) {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting && currentChar < phrases[currentIndex].length) {
          setCurrentPhrase((prev) => prev + phrases[currentIndex][currentChar]);
          setCurrentChar((prev) => prev + 1);
        } else if (isDeleting && currentPhrase.length > 0) {
          setCurrentPhrase((prev) => prev.slice(0, -1));
        } else if (currentPhrase.length === 0 && isDeleting) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setIsDeleting(true);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [currentPhrase, isDeleting, currentIndex, currentChar, phrases]);

  return <span className="text-2xl font-semibold">{currentPhrase}</span>;
}
