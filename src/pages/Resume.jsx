function Resume() {
  return (
    <section className="resume-page">
      <div className="container">
        <h1>Resume</h1>

        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="800px"
        />
      </div>
    </section>
  );
}

export default Resume;