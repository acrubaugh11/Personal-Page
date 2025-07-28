// app/resume/page.tsx

import res from "../res.png";

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="max-w-4xl w-full border border-border rounded-xl overflow-hidden shadow-lg">
        <img
          src={res}
          alt="Alexander Crubaugh Resume"
          className="w-full h-auto"
        />
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-black gap-2 px-8 py-4 border-2 border-border text-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium text-lg mt-6"
      >
        Download PDF
      </a>
    </main>
  );
}
