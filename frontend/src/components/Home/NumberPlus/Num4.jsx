import React, { useEffect, useState } from "react";

function Num4() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("target");
      const rect = targetElement.getBoundingClientRect();
      const isIntersecting = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isIntersecting) {
        setNumber(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("target");
      const rect = targetElement.getBoundingClientRect();
      const isIntersecting = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isIntersecting && number === 0) {
        const interval = setInterval(() => {
          setNumber((prevNumber) => {
            if (prevNumber === 2000) {
              clearInterval(interval);
              return prevNumber;
            } else {
              return prevNumber + 40;
            }
          });
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [number]);

  return <div>{number}</div>;
}

export default Num4;
