import { useState, useEffect } from "react";
import "./Style.scss";

const GreetingList = [
  "World",
  "Coffee",
  "Deadlines",
  "Problems",
  "Pixels",
  "Drafts",
  "Inspiration",
  "Iterations",
  "Clients"
];

// Animation delay
const typeEndDelay = 1000; // Delay after typing is finished (ms)
const deleteEndDelay = 500; // Delay after deleting is finished (ms)
const typeSpeed = 100; // Typing speed (ms per character)
const deleteSpeed = 50; // Deleting speed (ms per character)

const Content = () => {
  const [currentText, setCurrentText] = useState(""); // The text being displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current greeting index
  const [isTyping, setIsTyping] = useState(true); // Track if typing or deleting

  useEffect(() => {
    const currentGreeting = GreetingList[currentIndex];

    if (isTyping) {
      // Typing animation logic
      if (currentText.length < currentGreeting.length) {
        const typingTimeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentGreeting[prev.length]);
        }, typeSpeed);
        return () => clearTimeout(typingTimeout);
      } else {
        // Finished typing, switch to deleting after delay
        const typeEndTimeout = setTimeout(() => {
          setIsTyping(false);
        }, typeEndDelay);
        return () => clearTimeout(typeEndTimeout);
      }
    } else {
      // Deleting animation logic
      if (currentText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(deletingTimeout);
      } else {
        // Finished deleting, move to the next item
        const deleteEndTimeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % GreetingList.length); // Loop back to the first item
        }, deleteEndDelay);
        return () => clearTimeout(deleteEndTimeout);
      }
    }
  }, [currentText, isTyping, currentIndex]);

  return (
    <div className="demo-hello-world">
      <div className="demo-hello-world__hello">Hello,</div>
      <ul className="demo-hello-world__list">
        <li className="demo-hello-world__item">
          {currentText}
          <span className="demo-hello-world__text-cursor"></span>
        </li>
      </ul>
      <div className="demo-hello-world__end">!</div>
    </div>
  );
};

export default Content;
