import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>

      <section className="flex items-center space-x-8">
        <img
          src="egw.jpg" // Δώσε το σωστό path της εικόνας
          alt="Dimitris Kechagioglou"
          className="w-40 h-40 rounded-full object-cover border-4 border-zinc-300 shadow-md"
        />
        </section>
        <section className="mb-10 py-8">
      <h2 className="text-2xl font-semibold text-blue-400">About Me</h2>
      
        <p className="text-zinc-300 drop-shadow-md">I'm currently pursuing a degree in Digital Systems at the University of Piraeus, where I'm developing a strong foundation in technology and innovation. Proficient in English at the C2 level, I bring excellent communication skills to collaborate effectively in diverse teams. Familiar with basic networking concepts, such as IP addressing, subnetting, and configuration of routersand switches.I'm eager to connect with like-minded professionals and explore opportunities togrow and contribute in the tech industry.</p>
      </section>
    </PageWrapper>
  );
}