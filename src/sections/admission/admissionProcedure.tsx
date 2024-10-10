// D:\Lets Do It\jaris-landing\src\sections\admission\admissionProcedure.tsx
import type { NextPage } from "next";
import Image from "next/image";

export type AdmissionProcedureType = {
  className?: string;
};

const steps = [
  {
    number: "01",
    title: "FCFS",
    description:
      "Admissions are offered to everyone on a first-come-first-serve basis, irrespective of nationality, color, caste, creed, race, origin, and social status.",
  },
  {
    number: "02",
    title: "Assessment Test",
    description:
      "The school uses an entry test (assessment) as the main tool for admission. However, talented students can justify their performance with past records.",
  },
  {
    number: "03",
    title: "Samples",
    description:
      "Specimen assessments for core subjects are available on our website to help students prepare for the entry test.",
  },
  {
    number: "04",
    title: "Interview",
    description:
      "The interview assesses general intelligence and behavior, covering English, Mathematics, Science, and General Knowledge.",
  },
  {
    number: "05",
    title: "Qualified",
    description:
      "After passing the assessment, qualified students are offered provisional admission and provided with necessary documents.",
  },
];

const AdmissionProcedure: NextPage<AdmissionProcedureType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center py-12 px-4 lg:px-16 bg-bg-primary ${className}`}
    >
      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-jaris-blue mb-12">
        Admission Procedure
      </h1>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 flex flex-col items-start text-left"
          >
            <div className="text-jaris-gold text-2xl font-semibold mb-4">
              {step.number}
            </div>
            <h2 className="text-xl font-bold text-jaris-blue mb-2">
              {step.title}
            </h2>
            <p className="text-base text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Background image at the bottom */}
      <div className="relative w-full h-[300px] md:h-[500px] mt-12">
        <Image
          src="/images/admission/admissionProseBackground.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AdmissionProcedure;
