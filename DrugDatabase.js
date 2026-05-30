import { useState } from "react";

function DrugDatabase() {

  const [search, setSearch] = useState("");

  const drugs = [
    {
      name: "Paracetamol",
      dosage: "500mg",
      use: "Fever"
    },
    {
      name: "Ibuprofen",
      dosage: "400mg",
      use: "Pain Relief"
    },
    {
      name: "Azithromycin",
      dosage: "250mg",
      use: "Infection"
    }
  ];

  const filtered =
    drugs.filter((drug) =>
      drug.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="container py-5">

      <div
        className="card border-0 shadow-lg p-5"
        style={{
          borderRadius: "25px"
        }}
      >

        <h1 className="fw-bold text-center mb-5">
          Drug Database
        </h1>

        <input
          type="text"
          className="form-control p-3 mb-4"
          placeholder="Search Medicine"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <table className="table table-hover">

          <thead>
            <tr>
              <th>Medicine</th>
              <th>Dosage</th>
              <th>Use</th>
            </tr>
          </thead>

          <tbody>

            {
              filtered.map((drug, index) => (

                <tr key={index}>
                  <td>{drug.name}</td>
                  <td>{drug.dosage}</td>
                  <td>{drug.use}</td>
                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DrugDatabase;