import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { useReactToPrint } from "react-to-print";

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
  });

  return (
    <Button
      variant="outline"
      size="icon"
      title="Download Resume"
      onClick={() => handlePrint && handlePrint()}
    >
      <DownloadIcon className="size-5" />
    </Button>
  );
};

export default ResumeDownloadButton;
