import React from 'react';

function Wrapper({ children ,className}) {
  return (
    <section className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export default Wrapper;
