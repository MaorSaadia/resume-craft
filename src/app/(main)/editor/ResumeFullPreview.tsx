import { ForwardedRef, forwardRef } from "react";
import { ExpandIcon, FileText } from "lucide-react";

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
}

const ResumeFullPreview = forwardRef(
  (
    { resumeData, title, className }: ResumeFullPreviewProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" title="Preview">
            <ExpandIcon size="size-5" />
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
            "
          >
            <DialogTitle
              className="
                flex items-center gap-1 text-[20px]
                pt-2 px-3 font-semibold opacity-100
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
