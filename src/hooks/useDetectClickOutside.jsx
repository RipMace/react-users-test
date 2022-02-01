import { useEffect } from 'react';

const useDetectClickOutside = (ref, onClickOutside) => {

  const handleClickOutside = (e) => {
    if (ref?.current && !ref.current.contains(e.target)) {
      onClickOutside()
    }
  }

  useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    },
    [ref],
  );
}

export default useDetectClickOutside
