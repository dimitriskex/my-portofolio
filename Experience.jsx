import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Experience() {
  return (
    <PageWrapper>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        
        {/* Experience Item */}
        <div className="space-y-4">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-400">FO Agent, Nova (2024–Present)</h3>
            <p className="text-zinc-300 mt-2">
              My experience at Nova was excellent and a bit of a challenge...
            </p>
            <p className="text-zinc-300 mt-4">
              Having the opportunity to deal with a high volume of customers, each one with a different case to be solved, was a very unique experience for me. Some of the most important soft skills that I developed through this job are communication and problem-solving. Managing a big amount of customer inquiries pushed me to be even better at time management.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

