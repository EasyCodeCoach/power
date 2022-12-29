import React from "react";
import { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/user", {
      name,
      age,
      phone,
      gender,
    });
    // setName("");
    // setAge("");
    // setGender("");
    // setPhone("");
    window.location.reload();
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              className="form-control"
              onChange={(event) => setAge(event.target.value)}
              value={age}
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="gender">Gender</label>

            <select
              name="gender"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=""></option>
              <option value="male">male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
