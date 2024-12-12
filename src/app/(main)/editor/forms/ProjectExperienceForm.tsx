import { GripHorizontal } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EditorFormProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  projectExperienceSchema,
  ProjectExperienceValues,
} from "@/lib/validation";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import GenerateProjectExperienceButton from "./GenerateProjectExperienceButton";

export default function ProjectExperienceForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<ProjectExperienceValues>({
    resolver: zodResolver(projectExperienceSchema),
    defaultValues: {
      projectExperiences: resumeData.projectExperiences || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        projectExperiences:
          values.projectExperiences?.filter((exp) => exp !== undefined) || [],
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove, move } = useFieldArray({
    control: form.control,
    name: "projectExperiences",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over.id);
      move(oldIndex, newIndex);
      return arrayMove(fields, oldIndex, newIndex);
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Project experience</h2>
        <p className="text-sm text-muted-foreground">
          Add as many projects as you like.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              items={fields}
              strategy={verticalListSortingStrategy}
            >
              {fields.map((field, index) => (
                <ProjectExperienceItem
                  id={field.id}
                  key={field.id}
                  index={index}
                  form={form}
                  remove={remove}
                />
              ))}
            </SortableContext>
          </DndContext>
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={() =>
                append({
                  title: "",
                  technologies: "",
                  description: "",
                  githubLink: "",
                  websiteLink: "",
                })
              }
            >
              Add project
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface ProjectExperienceItemProps {
  id: string;
  form: UseFormReturn<ProjectExperienceValues>;
  index: number;
  remove: (index: number) => void;
}

function ProjectExperienceItem({
  id,
  form,
  index,
  remove,
}: ProjectExperienceItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <div
      className={cn(
        "space-y-3 rounded-md border bg-background p-3",
        isDragging && "relative z-50 cursor-grab shadow-xl",
      )}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <div className="flex justify-between gap-2">
        <span className="font-semibold">Project {index + 1}</span>
        <GripHorizontal
          className="size-5 cursor-grab text-muted-foreground focus:outline-none"
          {...attributes}
          {...listeners}
        />
      </div>
      <div className="flex justify-center">
        <GenerateProjectExperienceButton
          onProjectExperienceGenerated={(exp) =>
            form.setValue(`projectExperiences.${index}`, exp)
          }
        />
      </div>
      <FormField
        control={form.control}
        name={`projectExperiences.${index}.title`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project title</FormLabel>
            <FormControl>
              <Input {...field} autoFocus />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projectExperiences.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} style={{ minHeight: "120px" }} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projectExperiences.${index}.technologies`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Technologies used</FormLabel>
            <FormControl>
              <Input {...field} placeholder="e.g. React, Node.js, AWS" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormDescription></FormDescription>
      <FormField
        control={form.control}
        name={`projectExperiences.${index}.websiteLink`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website link (optional)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="url"
                placeholder="https://websitename.com"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`projectExperiences.${index}.githubLink`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub link (optional)</FormLabel>
            <FormControl>
              <Input
                {...field}
                type="url"
                placeholder="https://github.com/username/project"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button variant="destructive" type="button" onClick={() => remove(index)}>
        Remove
      </Button>
    </div>
  );
}
