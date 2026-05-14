import "./ReportSection.css";

function ReportSection({ title, children }) {
  return (
    <section className="report-section">
      <div className="section-title">{title}</div>

      <div className="section-content">{children}</div>
    </section>
  );
}

export default ReportSection;