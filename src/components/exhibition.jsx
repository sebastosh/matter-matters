import React, { useState } from "react";

export default function Exhibition() {
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "place":
        setPlace(value);
        break;
      case "startdate":
        setStartDate(new Date(value)); // Convert date string to a JavaScript Date object
        break;
      case "enddate":
        setEndDate(new Date(value));
        break;
    }
  };

  return (
    <div>
      <h3>
        <strong>EXHIBITION</strong> (title, place, dates)
      </h3>
      <div className="exhibition">
        <div className="exhibition-field">
          <label>
            Exhibition Title{" "}
            <input
              type="text"
              onChange={handleChange}
              value={title}
              name="title"
            />
          </label>
        </div>

        <div className="exhibition-field">
          <label>
            Institution Name{" "}
            <input
              type="text"
              onChange={handleChange}
              value={place}
              name="place"
            />
          </label>
        </div>

        <div className="dates">
          <div className="exhibition-field">
            <label>
              Start Date{" "}
              <input
                type="date"
                onChange={handleChange}
                value={startDate ? startDate.toISOString().split("T")[0] : ""}
                name="startdate"
              />
            </label>
          </div>
          <div className="exhibition-field">
            <label>
              End Date{" "}
              <input
                type="date"
                onChange={handleChange}
                value={endDate ? endDate.toISOString().split("T")[0] : ""}
                name="enddate"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
