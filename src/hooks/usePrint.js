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

  const handlePdfDownload = () => {
    const pdfPath = '/src/data/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'MOHAMED_MAZOOMY_Resume.pdf';
    
    // For browsers that require the link to be in the document
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { printRef, handlePrint, handlePdfDownload };
};