import { useEffect, useState } from "react";

const useFindOrientation = () => {
  const getOrientation = () => {
    if (window.innerWidth > window.innerHeight) {
      return "landscape";
    } else {
      return "portrait";
    }
  };

  const [orientation, setOrientation] = useState(getOrientation());

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return orientation;
};

export default useFindOrientation;
