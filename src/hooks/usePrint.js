import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export const usePrint = (documentTitle) => {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: documentTitle,
    removeAfterPrint: true,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .print-hidden {
          display: none !important;
        }
      }
    `,
    onBeforeGetContent: () => {
      document.body.classList.add('printing');
    },
    onAfterPrint: () => {
      document.body.classList.remove('printing');
    }
  });

  return { printRef, handlePrint };
};