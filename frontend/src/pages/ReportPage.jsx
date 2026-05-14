import Header from "../components/Header/Header";
import ReportSection from "../components/ReportSection/ReportSection";
import DataTable from "../components/Table/DataTable";
import Footer from "../components/Footer/Footer";

import { reportData } from "../data/reportData";

function ReportPage() {
  return (
    <>
      {/* PAGE 1 */}

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

        <Footer page={1} />
      </div>

      {/* PAGE BREAK */}

      <div className="page-break"></div>

      {/* PAGE 2 */}

      <div className="page">
        <Header />

        <ReportSection title="Result / Summary">
          <DataTable data={reportData.summary} />
        </ReportSection>

        <ReportSection title="Evaluation">
          <div className="evaluation-box">
            {reportData.evaluation}
          </div>
        </ReportSection>

        <Footer page={2} />
      </div>
    </>
  );
}

export default ReportPage;