import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-zinc-300 mb-6">
          Feel free to contact me through any of the following channels:
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-lg font-semibold text-blue-400">
              <a href="https://www.linkedin.com/in/dimitris-kechagioglou-ab837420a/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
            <p className="text-zinc-400">Let's connect professionally.</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-400">
              <a href="https://github.com/dimitriskex" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            <p className="text-zinc-400">View my code and contributions.</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-400">
              <a href="mailto:kechagiogloudimitris@gmail.com">
                kechagiogloudimitris@gmail.com
              </a>
            </p>
            <p className="text-zinc-400">Feel free to email me directly.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
