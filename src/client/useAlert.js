import { useState, useEffect } from 'react';

const useAlert = ({ clients }) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    if (clients.length > 0) {
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    }
  }, [clients]);

  return displayAlert;
};

export default useAlert;