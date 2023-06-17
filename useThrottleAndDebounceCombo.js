import React from 'react';

const useThrottleAndDebounceCombo = (param, throttleDelay, debounceDelley) => {
  const paramRef = React.useRef(param);
  const lastTimeRef = React.useRef(0);
  React.useEffect(() => {
    let timer;
    const currentTime = Date.now();
    if (currentTime - lastTimeRef.current > throttleDelay) {
      paramRef.current = param;
      lastTimeRef.current = currentTime;
    } else {
      timer = setTimeout(() => {
        paramRef.current = param;
      }, throttleDelay - debounceDelley);
    }
    return () => clearTimeout(timer);
  }, [param, throttleDelay, debounceDelley]);
  return paramRef.current;
};

export default useThrottleAndDebounceCombo;