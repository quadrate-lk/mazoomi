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

  const handlePdfGeneration = async () => {
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command: 'markdown-pdf',
          args: ['src/data/resume-data.md', '-s', 'src/data/resume-style.css', '-o', 'src/data/resume.pdf']
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      // Create a download link for the generated PDF
      const link = document.createElement('a');
      link.href = '/src/data/resume.pdf';
      link.download = 'MOHAMED_MAZOOMY_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return { printRef, handlePrint, handlePdfGeneration };
};