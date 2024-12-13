import { EditorFormProps } from "@/lib/types";
import EducationForm from "./forms/EducationForm";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import SkillsForm from "./forms/SkillsForm";
import SummaryForm from "./forms/SummaryForm";
import WorkExperienceForm from "./forms/WorkExperienceForm";
import ProjectExperienceForm from "./forms/ProjectExperienceForm";
import LanguagesForm from "./forms/LanguagesForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperienceForm,
    key: "work-experience",
  },
  { title: "Education", component: EducationForm, key: "education" },
  {
    title: "Personal Projects",
    component: ProjectExperienceForm,
    key: "personal-projects",
  },
  { title: "Skills", component: SkillsForm, key: "skills" },
  { title: "Language", component: LanguagesForm, key: "language" },

  {
    title: "Summary",
    component: SummaryForm,
    key: "summary",
  },
];
