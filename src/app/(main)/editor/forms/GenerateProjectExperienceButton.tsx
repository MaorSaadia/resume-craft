import { useState } from "react";
import { useForm } from "react-hook-form";
import { WandSparklesIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/use-toast";
import usePremiumModal from "@/hooks/usePremiumModal";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  GenerateProjectExperienceInput,
  generateProjectExperienceSchema,
  ProjectExperience,
} from "@/lib/validation";
import { canUseAITools } from "@/lib/permissions";
import { useSubscriptionLevel } from "../../SubscriptionLevelProvider";
import { generateProjectExperience } from "./actions";

interface GenerateProjectExperienceButtonProps {
  onProjectExperienceGenerated: (projectExperience: ProjectExperience) => void;
}

export default function GenerateProjectExperienceButton({
  onProjectExperienceGenerated,
}: GenerateProjectExperienceButtonProps) {
  const subscriptionLevel = useSubscriptionLevel();
  const premiumModal = usePremiumModal();

  const [showInputDialog, setShowInputDialog] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        type="button"
        onClick={() => {
          if (!canUseAITools(subscriptionLevel)) {
            premiumModal.setOpen(true);
            return;
          }
          setShowInputDialog(true);
        }}
      >
        <WandSparklesIcon className="size-4" />
        Smart fill (AI)
      </Button>
      <InputDialog
        open={showInputDialog}
        onOpenChange={setShowInputDialog}
        onProjectExperienceGenerated={(projectExperience) => {
          onProjectExperienceGenerated(projectExperience);
          setShowInputDialog(false);
        }}
      />
    </>
  );
}

interface InputDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectExperienceGenerated: (projectExperience: ProjectExperience) => void;
}

function InputDialog({
  open,
  onOpenChange,
  onProjectExperienceGenerated,
}: InputDialogProps) {
  const { toast } = useToast();

  const form = useForm<GenerateProjectExperienceInput>({
    resolver: zodResolver(generateProjectExperienceSchema),
    defaultValues: {
      description: "",
    },
  });

  async function onSubmit(input: GenerateProjectExperienceInput) {
    try {
      const response = await generateProjectExperience(input);
      onProjectExperienceGenerated(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate project experience</DialogTitle>
          <DialogDescription>
            Describe this project and the AI will generate an optimized entry
            for you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={`E.g. "I developed a full-stack e-commerce website using React and Node.js, implemented authentication, payment integration, and deployed on AWS"`}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton type="submit" loading={form.formState.isSubmitting}>
              Generate
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
