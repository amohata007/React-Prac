import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Count
      </button>
      <h2>I'm from About us page.</h2>
      <h6>Creation of this page is in progress.</h6>
    </div>
  );
};

export default About;
