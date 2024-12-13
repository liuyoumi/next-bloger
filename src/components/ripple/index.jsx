import {useRef} from "react";
import "./index.css";

export default ({children}) => {
  const rippleRef = useRef(null);
  
  const createRipple = (event) => {
    const rippleContainer = rippleRef.current;
    const circle = document.createElement("span");
    const diameter = Math.max(rippleContainer.clientWidth, rippleContainer.clientHeight);
    const radius = diameter / 2;
    const rect = rippleContainer.getBoundingClientRect();
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-effect");
    
    rippleContainer.appendChild(circle);
    
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
    console.log(6);
  };
  
  return (
      <div
          className="relative overflow-hidden inline-block"
          ref={rippleRef}
          onTouchStart={createRipple}
      >
        {children}
      </div>
  );
};