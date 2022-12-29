import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Update() {
  const { id } = useParams();

  console.log(id);
  const [user, setUser] = useState({});
  const [age, setAge] = useState(0);
  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/user/${id}`, {
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

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8000/api/user/${id}`);
      console.log(response.data);
      setUser(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div>
        <div className="container">
          <h1 className="text-center my-3">Update User Details</h1>
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
              <button className="btn btn-primary">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
