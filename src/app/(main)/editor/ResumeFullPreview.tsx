import { ForwardedRef, forwardRef } from "react";
import { ExpandIcon, FileText, PrinterIcon } from "lucide-react";
import { useReactToPrint } from "react-to-print";

import {
  Dialog,
  DialogContent,
  DialogHeader,
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
        <DialogContent
          className="
            sm:max-w-4xl p-0
            w-full max-h-[90vh]
            lg:max-h-[95vh]
            overflow-y-auto
          "
        >
          <DialogHeader
            className="!pb-0
              !m-0 sticky top-0
              backdrop-blur bg-white
              dark:bg-black/70 z-10
              flex justify-between items-center
            "
          >
            <DialogTitle
              className="
                flex items-center gap-1 text-[20px]
                pt-2 px-3 font-semibold opacity-100
                flex-grow
              "
            >
              <FileText
                size="20px"
                className="
                  stroke-primary
                "
              />
              {title}
            </DialogTitle>
            <div className="pr-3">
              <Button
                variant="outline"
                size="icon"
                title="Print Resume"
                onClick={() => handlePrint && handlePrint()}
              >
                <PrinterIcon className="size-5" />
              </Button>
            </div>
          </DialogHeader>
          <div className="w-full h-full px-2 pb-4 border-t">
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
