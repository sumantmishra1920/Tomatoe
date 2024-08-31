import React, { useEffect, useState} from 'react';
import Shimmer from './Shimmer'

const Loading = ({ status, error }) => {

  const [showError, setShowError] = useState(false);  // Delay the display of the error message by 3 seconds
  useEffect(() => {
    if (status === 'failed') {
      const timer = setTimeout(() => {
        setShowError(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  if (status === 'loading') {
    return <div><Shimmer/></div>;
  }

  if (status === 'failed') {
    return (
      <div>
        {showError ? (
          <div>
            <p className="text-lg font-bold">
              {"Oops! Something went wrong :("}
            </p>
            <p>{error}</p>
          </div>
        ) : (
          <div><Shimmer/></div>
        )}
      </div>
    );
  }

  return null;
};

export default Loading;
