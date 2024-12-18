import React from "react";
import { useReactToPrint } from "react-to-print";
import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ResumeDownloadButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
  documentTitle?: string;
}

const ResumeDownloadButton: React.FC<ResumeDownloadButtonProps> = ({
  documentTitle = "Resume",
  contentRef,
}) => {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: documentTitle,
    preserveAfterPrint: false,
    pageStyle: `
      @page {
        size: auto;
        margin: 0mm;
      }
      @media print {
        body {
          margin: 0;
          padding: 0;
        }
      }
    `,
  });

  return (
    <Button
      variant="outline"
      size="icon"
      title="Download resume"
      onClick={() => handlePrint && handlePrint()}
    >
      <DownloadIcon className="size-5" />
    </Button>
  );
};

export default ResumeDownloadButton;
