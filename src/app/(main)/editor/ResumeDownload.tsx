import { useCallback, useState } from "react";
import { jsPDF } from "jspdf";
import { DownloadIcon } from "lucide-react";
import html2canvas from "html2canvas";

import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { formatFileName } from "@/lib/helper";

const ResumeDownload = (props: { title: string; isLoading: boolean }) => {
  const { title, isLoading } = props;
  const [loading, setLoading] = useState(false);

  const handleDownload = useCallback(async () => {
    const resumeElement = document.getElementById("resumePreviewContent");
    if (!resumeElement) {
      toast({
        title: "Error",
        description: "Could not download",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    const fileName = formatFileName(title);
    try {
      // Increase the scale for better resolution
      const canvas = await html2canvas(resumeElement, {
        scale: 4, // Increase the scale to 4 for higher quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        imageTimeout: 0,
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true, // Only embed used fonts
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate the height to maintain aspect ratio
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      const heightRatio = imgHeight / pdfHeight;

      // If the image is taller than one page, split it
      if (heightRatio > 1) {
        const totalPages = Math.ceil(heightRatio);
        for (let i = 0; i < totalPages; i++) {
          if (i > 0) {
            pdf.addPage();
          }

          // Calculate the part of the image to draw on this page
          const sourceY = (i * canvas.height) / totalPages;
          const sourceHeight = canvas.height / totalPages;

          pdf.addImage(
            imgData,
            "JPEG",
            0,
            0,
            pdfWidth,
            sourceHeight,
            undefined,
            "FAST",
          );
        }
      } else {
        // If the image fits on one page
        pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, imgHeight);
      }

      pdf.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Error generating PDF",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [title]);

  return (
    <Button
      disabled={isLoading || loading}
      variant="outline"
      size="icon"
      title="Download Resume"
      onClick={handleDownload}
    >
      <DownloadIcon className="size-5" />
    </Button>
  );
};

export default ResumeDownload;
