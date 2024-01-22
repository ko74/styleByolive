import React from 'react';
import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PageLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Loader type="TailSpin" color="#4a5568" height={80} width={80} /> */}
    </div>
  );
};

export default PageLoader;
