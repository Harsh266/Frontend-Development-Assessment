import Header from "../components/Header/Header";
import ReportSection from "../components/ReportSection/ReportSection";
import DataTable from "../components/Table/DataTable";
import Footer from "../components/Footer/Footer";

import { reportData } from "../data/reportData";

function ReportPage() {
  return (
    <div className="page">
      <Header />

      <ReportSection title="Contact Details">
        <DataTable data={reportData.contactDetails} />
      </ReportSection>

      <ReportSection title="Design Parameters">
        <DataTable data={reportData.designParameters} />
      </ReportSection>

      <ReportSection title="Dimensions">
        <DataTable data={reportData.dimensions} />
      </ReportSection>

      <ReportSection title="Material">
        <DataTable data={reportData.material} />
      </ReportSection>

      <ReportSection title="Result / Summary">
        <DataTable data={reportData.summary} />
      </ReportSection>

      <ReportSection title="Evaluation">
        <div style={{ padding: "10px" }}>
          {reportData.evaluation}
        </div>
      </ReportSection>

      <Footer page={1} />
    </div>
  );
}

export default ReportPage;