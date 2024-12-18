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
    preserveAfterPrint: true,
  });

  return (
    <Button
      className="-mt-3"
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
