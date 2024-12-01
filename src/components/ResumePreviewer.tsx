import React from 'react';
import { Card } from '@/components/ui/card';
import type { ResumeData } from './ResumeEditor';

interface ResumePreviewerProps {
  data: ResumeData;
}

const ResumePreviewer: React.FC<ResumePreviewerProps> = ({ data }) => {
  return (
    <Card className="p-8 min-h-screen bg-white text-left">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">{data.personalInfo.name}</h1>
        <div className="text-secondary space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </div>

      {data.summary && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Professional Summary</h2>
          <p className="text-secondary">{data.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Work Experience</h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-secondary">{exp.company} | {exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Education</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-secondary">{edu.institution} | {edu.duration}</p>
            </div>
          ))}
        </div>
      )}

      {data.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-secondary/10 text-secondary px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default ResumePreviewer;