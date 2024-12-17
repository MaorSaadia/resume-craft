import { useCallback, useState } from "react";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ResumeDownload = (props: {
  title: string;
  isLoading: boolean;
  getHtmlContent: () => string;
}) => {
  const { title, isLoading, getHtmlContent } = props;
  const [loading, setLoading] = useState(false);

  const handleDownload = useCallback(async () => {
    const htmlContent = getHtmlContent();

    if (!htmlContent) {
      toast({
        title: "Error",
        description: "Could not generate resume content",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate-resume-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent,
          title,
        }),
      });

      if (!response.ok) {
        // Log detailed error
        const errorText = await response.text();
        console.error("Error Response:", errorText);

        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Detailed Download Error:", error);

      toast({
        title: "PDF Download Error",
        description:
          error instanceof Error
            ? error.message
            : "Unexpected error generating PDF",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [title, getHtmlContent]);
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
