import React, { forwardRef } from 'react';

const PrintWrapper = forwardRef(({ children }, ref) => {
  return (
    <div 
      ref={ref} 
      className="print-content"
      style={{ backgroundColor: 'white' }}
    >
      {children}
    </div>
  );
});

PrintWrapper.displayName = 'PrintWrapper';

export default PrintWrapper;