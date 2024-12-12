import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "date-fns";
import {
  FaExternalLinkSquareAlt,
  FaGithub,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";

import useDimensions from "@/hooks/useDimensions";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { Badge } from "./ui/badge";
import { franc } from "franc-all";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  contentRef,
  className,
}: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useDimensions(containerRef);

  franc("Alle menslike wesens word vry");

  return (
    <div
      className={cn(
        "aspect-[210/297] h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
        <PersonalInfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />
        <SkillsSection resumeData={resumeData} />
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    colorHex,
    borderStyle,
    portfolioLink,
    linkedinLink,
    githubLink,
    textDirection,
  } = resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";
    if (objectUrl) setPhotoSrc(objectUrl);
    if (photo === null) setPhotoSrc("");
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  // Social link rendering helper
  const SocialLink = ({
    href,
    icon: Icon,
    label,
  }: {
    href?: string;
    icon: React.ComponentType<{ size?: number; color?: string }>;
    label: string;
  }) => {
    if (!href) return null;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs text-gray-600 transition-colors hover:text-black"
        aria-label={label}
      >
        <Icon size={14} />
        <span className="underline decoration-gray-300">
          {new URL(href).hostname.replace("www.", "")}
        </span>
      </a>
    );
  };

  return (
    <div
      className={`flex items-center gap-6 ${textDirection === "rtl" ? "flex-row-reverse" : "flex-row"}`}
    >
      {photoSrc && (
        <Image
          src={photoSrc}
          width={100}
          height={100}
          alt="Author photo"
          className="aspect-square object-cover"
          style={{
            borderRadius:
              borderStyle === BorderStyles.SQUARE
                ? "0px"
                : borderStyle === BorderStyles.CIRCLE
                  ? "9999px"
                  : "10%",
          }}
        />
      )}
      <div className="space-y-1" dir={textDirection}>
        <div className="space-y-1">
          <p
            className="font-serif text-4xl font-bold"
            style={{
              color: colorHex,
              textAlign: textDirection === "rtl" ? "right" : "left", // Align text based on direction
            }}
          >
            {firstName} {lastName}
          </p>
          <p
            className="text-lg font-medium"
            style={{
              color: colorHex,
              textAlign: textDirection === "rtl" ? "right" : "left", // Align text based on direction
            }}
          >
            {jobTitle}
          </p>
        </div>
        <p
          className="text-xs text-gray-500"
          style={{ textAlign: textDirection === "rtl" ? "right" : "left" }}
        >
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? " • " : ""}
          {[phone, email].filter(Boolean).join(" • ")}
        </p>
        <div className="flex gap-3">
          <SocialLink href={portfolioLink} icon={FaGlobe} label="Portfolio" />
          <SocialLink href={linkedinLink} icon={FaLinkedin} label="LinkedIn" />
          <SocialLink href={githubLink} icon={FaGithub} label="GitHub" />
        </div>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary, colorHex, textDirection } = resumeData;

  if (!summary) return null;
  return (
    <div className="space-y-2">
      <hr
        className="-mt-4 border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-1" dir={textDirection}>
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        ></p>
        <div className={`whitespace-pre-line text-sm ${textDirection}`}>
          {summary}
        </div>
      </div>
    </div>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences, colorHex, textDirection } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiences || !workExperiencesNotEmpty?.length) return null;

  const lang = franc(workExperiences[0]?.position, { minLength: 1 });

  console.log(lang);

  return (
    <div className="space-y-1" dir={textDirection}>
      <hr
        className="-mt-4 border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="space-y-1">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          {lang === "heb" ? "ניסיון תעסוקתי" : "Work experience"}
        </p>
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid">
            <div
              className="flex items-center justify-between text-sm font-semibold"
              style={{
                color: colorHex,
              }}
            >
              <span>{exp.position}</span>
              {exp.startDate && (
                <span>
                  {formatDate(exp.startDate, "MM/yyyy")} -{" "}
                  {exp.endDate ? formatDate(exp.endDate, "MM/yyyy") : "Present"}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{exp.company}</p>
            <div className="whitespace-pre-line text-xs">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations, colorHex, textDirection } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <div className="space-y-1" dir={textDirection}>
      <hr
        className="-mt-4 border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="space-y-1">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Education
        </p>
        {educationsNotEmpty.map((edu, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div
              className="flex items-center justify-between text-sm font-semibold"
              style={{
                color: colorHex,
              }}
            >
              <span>{edu.degree}</span>
              {edu.startDate && (
                <span>
                  {edu.startDate &&
                    `${formatDate(edu.startDate, "MM/yyyy")} ${edu.endDate ? `- ${formatDate(edu.endDate, "MM/yyyy")}` : ""}`}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{edu.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection({ resumeData }: ResumeSectionProps) {
  const { projectExperiences, colorHex, textDirection } = resumeData;

  const projectsNotEmpty = projectExperiences?.filter(
    (proj) => Object.values(proj).filter(Boolean).length > 0,
  );

  if (!projectsNotEmpty?.length) return null;

  return (
    <div className="space-y-1" dir={textDirection}>
      <hr
        className="-mt-4 border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="space-y-1">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Projects
        </p>
        {projectsNotEmpty.map((proj, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div className="flex items-center justify-between">
              <span
                className="text-sm font-semibold"
                style={{ color: colorHex }}
              >
                {proj.title}
              </span>
              <div className="flex items-center gap-1.5">
                {proj.websiteLink && (
                  <a
                    href={proj.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <FaExternalLinkSquareAlt
                      className="size-4"
                      title="live website"
                    />
                  </a>
                )}
                {proj.githubLink && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    <FaGithub className="size-4" title="github repo" />
                  </a>
                )}
              </div>
            </div>
            <div className="whitespace-pre-line text-xs">
              {proj.description}
            </div>
            {proj.technologies && (
              <p className="text-xs font-medium text-gray-600 ">
                Technologies: {proj.technologies}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ resumeData }: ResumeSectionProps) {
  const { skills, colorHex, borderStyle, textDirection } = resumeData;

  if (!skills?.length) return null;

  return (
    <div className="space-y-1" dir={textDirection}>
      <hr
        className="-mt-4 border-2"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Skills
        </p>
        <div className="flex break-inside-avoid flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-md bg-black text-white hover:bg-black"
              style={{
                backgroundColor: colorHex,
                borderRadius:
                  borderStyle === BorderStyles.SQUARE
                    ? "0px"
                    : borderStyle === BorderStyles.CIRCLE
                      ? "9999px"
                      : "8px",
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
