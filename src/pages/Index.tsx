import { useState } from 'react';
import ResumeEditor, { ResumeData } from '@/components/ResumeEditor';
import ResumePreviewer from '@/components/ResumePreviewer';

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-6">
        <div className="container">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="text-primary-foreground/80">Create your professional resume with ease</p>
        </div>
      </header>
      
      <main className="container py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeEditor onUpdate={setResumeData} />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <ResumePreviewer data={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;