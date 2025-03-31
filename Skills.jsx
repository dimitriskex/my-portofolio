import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Skills() {
  return (
    <PageWrapper>
      <section className="mb-8">
        <h2 className="text-4xl font-extrabold text-white mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">Programming Languages</h3>
            <ul className="space-y-2 text-zinc-300 text-lg">
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          {/* Agile */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">Agile</h3>
            <ul className="space-y-2 text-zinc-300 text-lg">
              <li>Scrum</li>
              <li>Sprint Planning</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-400">Languages</h3>
            <ul className="space-y-2 text-zinc-300 text-lg">
              <li>Greek (Native)</li>
              <li>English (C2 Level)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
