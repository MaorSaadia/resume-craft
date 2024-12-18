import { useRef } from "react";

import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import ResumePreview from "@/components/ResumePreview";
import BorderStyleButton from "./BorderStyleButton";
import ColorPicker from "./ColorPicker";
import ResumeDownloadButton from "./ResumeDownloadButton";
import ResumeFullPreview from "./ResumeFullPreview";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}

export default function ResumePreviewSection({
  resumeData,
  setResumeData,
  className,
}: ResumePreviewSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", className)}
    >
      <div className="absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 xl:opacity-100">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />
        <BorderStyleButton
          borderStyle={resumeData.borderStyle}
          onChange={(borderStyle) =>
            setResumeData({ ...resumeData, borderStyle })
          }
        />
        <ResumeFullPreview
          resumeData={resumeData}
          ref={contentRef}
          title={resumeData.title || "Resume"}
        />
        <ResumeDownloadButton
          documentTitle={resumeData.title || "Resume"}
          contentRef={contentRef}
        />
      </div>

      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <ResumePreview
          resumeData={resumeData}
          contentRef={contentRef}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
}
