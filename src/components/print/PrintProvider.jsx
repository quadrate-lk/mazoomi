import React from 'react';
import { usePrint } from '../../hooks/usePrint';

const PrintContext = React.createContext(null);

export const usePrintContext = () => {
  const context = React.useContext(PrintContext);
  if (!context) {
    throw new Error('usePrintContext must be used within a PrintProvider');
  }
  return context;
};

export const PrintProvider = ({ children, documentTitle }) => {
  const printUtils = usePrint(documentTitle);

  return (
    <PrintContext.Provider value={printUtils}>
      {children}
    </PrintContext.Provider>
  );
};