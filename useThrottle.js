import React from 'react';

const useThrottle = (param, delay) => {
  const paramRef = React.useRef(param);
  const lastTimeRef = React.useRef(0);
  React.useEffect(() => {
    const currentTime = Date.now();
    if (currentTime - lastTimeRef.current > delay) {
      paramRef.current = param;
      lastTimeRef.current = currentTime;
    } 
  }, [param, delay]);
  return paramRef.current;
};

export default useThrottle;