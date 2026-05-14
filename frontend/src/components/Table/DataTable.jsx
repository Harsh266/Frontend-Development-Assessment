import "./DataTable.css";

function DataTable({ data }) {
  return (
    <table className="data-table">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;