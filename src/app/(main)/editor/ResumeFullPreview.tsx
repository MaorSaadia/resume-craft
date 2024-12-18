import { ForwardedRef, forwardRef } from "react";
import { DownloadIcon, ExpandIcon, FileText } from "lucide-react";
import { useReactToPrint } from "react-to-print";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ResumeValues } from "@/lib/validation";
import ResumePreview from "@/components/ResumePreview";

interface ResumeFullPreviewProps {
  resumeData: ResumeValues;
  title?: string;
  className?: string;
  contentRef: React.RefObject<HTMLDivElement>;
}

const ResumeFullPreview = forwardRef(
  (
    { resumeData, title, className, contentRef }: ResumeFullPreviewProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const handlePrint = useReactToPrint({
      contentRef,
      documentTitle: title || "Resume",
      preserveAfterPrint: true,
    });

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" title="Preview">
            <ExpandIcon className="size-5" />
          </Button>
        </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent
          className="
            sm:max-w-4xl p-0
            w-full max-h-[90vh]
            lg:max-h-[95vh]
            overflow-y-auto
          "
        >
          <div
            className="
              sticky top-0 z-10 
              flex justify-between items-center 
              w-full 
              backdrop-blur bg-white 
              dark:bg-black/70 
              px-3 py-2 -mb-2
            "
          >
            <div className="flex items-center gap-1 text-[20px] font-semibold">
              <FileText size="20px" className="stroke-primary" />
              {title}
            </div>
            <Button
              variant="outline"
              size="icon"
              title="Print Resume"
              onClick={() => handlePrint && handlePrint()}
            >
              <DownloadIcon className="size-5" />
            </Button>
          </div>
          <div className="w-full h-full px-2 pb-1 border-t">
            <ResumePreview
              resumeData={resumeData}
              contentRef={ref}
              className={className}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);

ResumeFullPreview.displayName = "ResumeFullPreview";

export default ResumeFullPreview;
