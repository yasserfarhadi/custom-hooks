import React from 'react';

const useDebounce = (param, delay) => {
  const paramRef = React.useRef(param);
  React.useEffect(() => {
    let timer = setTimeout(() => {
		paramRef.current = param
	}, delay);
    return () => clearTimeout(timer);
  }, [param, delay]);
  return paramRef.current;
};

export default useDebounce;