// D:\Lets Do It\jaris-landing\src\sections\admission\admissionForm.tsx

import type { NextPage } from "next";
import Image from "next/image";

export type AdmissionFormType = {
  className?: string;
};

const AdmissionForm: NextPage<AdmissionFormType> = ({ className = "" }) => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-60"></div>
      <div className="z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center bg-transparent overflow-hidden">
        <div className="bg-transparent p-6 lg:p-10 rounded-lg shadow-md max-w-lg z-10 lg:mr-8 border-2 border-white">
          <h3 className="text-1xl lg:text-1xl font-bold text-white mb-4">
            Admission Procedure
          </h3>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Admission Procedure
          </h1>
          <p className="text-base lg:text-lg text-white mb-6">
            The school registers interested candidates. They can easily apply
            online via the link{" "}
            <a
              href="http://admissionform.jawahirschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 underline"
            >
              online admission
            </a>
            . After completing the registration, the admin office follows up via
            the ID number already allotted to the candidates through SMS.
          </p>
          <button className="bg-jaris-red text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300">
            <a
              href="http://admissionform.jawahirschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Admission Form
            </a>
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-64 p-6 lg:h-auto mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Student studying in library"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full bg-yellow-600 py-6 px-4 text-center">
        <p className="text-black text-sm md:text-base font-medium max-w-3xl mx-auto">
          New openings to all grades are announced every academic year prior to
          school closure for summer vacation. However, the Principal may
          consider granting admissions on reserved seats to those deserving
          students who will be joining from abroad any time of the year provided
          Ministry of Education approves such admission.
        </p>
      </div>
    </div>
  );
};

export default AdmissionForm;
