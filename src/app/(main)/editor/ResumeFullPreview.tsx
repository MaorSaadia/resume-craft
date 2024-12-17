import { useState, ForwardedRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ResumeValues } from "@/lib/validation";
import ResumePreview from "@/components/ResumePreview";
import { ExpandIcon } from "lucide-react";

interface ResumeFullPreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

const ResumeFullPreview = forwardRef(
  (
    { resumeData, className }: ResumeFullPreviewProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
      <>
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogTitle></DialogTitle>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              title="Expand"
              onClick={() => setIsFullscreen(true)}
            >
              <ExpandIcon className="size-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-full h-[95vh] w-[95vw] p-6 overflow-y-auto">
            <ResumePreview
              resumeData={resumeData}
              contentRef={ref}
              className={cn(
                "max-w-4xl mx-auto w-full h-full overflow-y-auto",
                className,
              )}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  },
);

ResumeFullPreview.displayName = "ResumeFullPreview";

export default ResumeFullPreview;
