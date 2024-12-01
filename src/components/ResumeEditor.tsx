import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    duration: string;
  }>;
  skills: string[];
}

const initialData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
  },
  summary: '',
  experience: [
    {
      id: '1',
      company: '',
      position: '',
      duration: '',
      description: '',
    },
  ],
  education: [
    {
      id: '1',
      institution: '',
      degree: '',
      duration: '',
    },
  ],
  skills: [],
};

interface ResumeEditorProps {
  onUpdate: (data: ResumeData) => void;
}

const ResumeEditor: React.FC<ResumeEditorProps> = ({ onUpdate }) => {
  const [data, setData] = useState<ResumeData>(initialData);

  const updateData = (newData: Partial<ResumeData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    onUpdate(updated);
  };

  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    updateData({
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    updateData({
      experience: [
        ...data.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          duration: '',
          description: '',
        },
      ],
    });
  };

  const updateExperience = (id: string, field: string, value: string) => {
    updateData({
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addEducation = () => {
    updateData({
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          institution: '',
          degree: '',
          duration: '',
        },
      ],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    updateData({
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const updateSkills = (skillsString: string) => {
    updateData({
      skills: skillsString.split(',').map((skill) => skill.trim()),
    });
  };

  return (
    <div className="space-y-8 p-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={data.personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo('location', e.target.value)}
              placeholder="City, Country"
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
        <Textarea
          value={data.summary}
          onChange={(e) => updateData({ summary: e.target.value })}
          placeholder="Write a brief professional summary..."
          className="h-32"
        />
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.id} className="mb-6 grid gap-4">
            <Input
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
              placeholder="Company Name"
            />
            <Input
              value={exp.position}
              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
              placeholder="Position"
            />
            <Input
              value={exp.duration}
              onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
              placeholder="Duration (e.g., 2020 - Present)"
            />
            <Textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="Job description and achievements..."
            />
          </div>
        ))}
        <Button onClick={addExperience} variant="outline">Add Experience</Button>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="mb-6 grid gap-4">
            <Input
              value={edu.institution}
              onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
              placeholder="Institution Name"
            />
            <Input
              value={edu.degree}
              onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
              placeholder="Degree"
            />
            <Input
              value={edu.duration}
              onChange={(e) => updateEducation(edu.id, 'duration', e.target.value)}
              placeholder="Duration (e.g., 2016 - 2020)"
            />
          </div>
        ))}
        <Button onClick={addEducation} variant="outline">Add Education</Button>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Textarea
          value={data.skills.join(', ')}
          onChange={(e) => updateSkills(e.target.value)}
          placeholder="Enter skills separated by commas..."
          className="h-32"
        />
      </Card>
    </div>
  );
};

export default ResumeEditor;