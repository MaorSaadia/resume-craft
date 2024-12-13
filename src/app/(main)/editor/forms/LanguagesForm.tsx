import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EditorFormProps } from "@/lib/types";
import { languageSchema, LanguageValues } from "@/lib/validation";

// Predefined list of language proficiency levels
const PROFICIENCY_LEVELS = [
  "Proficiency",
  "Native",
  "Fluent",
  "Intermediate",
  "Basic",
];

export default function LanguagesForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<LanguageValues>({
    resolver: zodResolver(languageSchema),
    defaultValues: {
      languages: resumeData.languages?.length
        ? resumeData.languages
        : [{ name: "", proficiency: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "languages",
  });

  useEffect(() => {
    const subscription = form.watch((values) => {
      const isValid = form.formState.isValid;
      if (!isValid) return;

      // Filter out empty languages and clean up the data
      const cleanedLanguages =
        values.languages
          ?.filter((lang) => lang?.name && lang.name.trim() !== "")
          .map((lang) => ({
            name: lang?.name?.trim() || "",
            proficiency: lang?.proficiency || "",
          })) || [];

      setResumeData({
        ...resumeData,
        languages: cleanedLanguages,
      });
    });

    return () => subscription.unsubscribe();
  }, [form, resumeData, setResumeData]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Languages</h2>
        <p className="text-sm text-muted-foreground">
          What languages do you speak?
        </p>
      </div>

      <Form {...form}>
        <form className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 items-center">
              <FormField
                control={form.control}
                name={`languages.${index}.name`}
                render={({ field: inputField }) => (
                  <FormItem className="flex-grow">
                    <FormLabel className="sr-only">Language Name</FormLabel>
                    <FormControl>
                      <Input
                        {...inputField}
                        placeholder="Language (e.g., Spanish, French)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`languages.${index}.proficiency`}
                render={({ field: selectField }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Proficiency</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={selectField.onChange}
                        defaultValue={selectField.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Proficiency" />
                        </SelectTrigger>
                        <SelectContent>
                          {PROFICIENCY_LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => remove(index)}
                  className="text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => append({ name: "", proficiency: "" })}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Language
          </Button>
        </form>
      </Form>
    </div>
  );
}
