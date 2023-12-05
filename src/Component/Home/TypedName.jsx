import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedTitle ()  {
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Abdulrahman",
        "Front-end developer",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h1 className="name"> I'm <h1 className="name  d-inline-block" ref={el}></h1>{" "}</h1>
  );
};
