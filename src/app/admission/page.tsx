// D:\Lets Do It\jaris-landing\src\app\admission\page.tsx

import { AdmissionForm, AdmissionProcedure, Header } from "@/sections";
import React from "react";
import Image from "next/image";

const Admission = () => {
  return (
    <>
      <Header />
      <main className="relative w-full bg-cream-bg overflow-hidden min-h-screen flex flex-col items-start justify-start">
        <AdmissionForm />

        <AdmissionProcedure />
      </main>
    </>
  );
};

export default Admission;
