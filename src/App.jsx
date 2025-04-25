import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    fatherName: '',
    motherName: '',
    city: '',
    state: '',
    country: '',
    college: '',
    semester: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label><br />
          <input name="name" value={formData.name} onChange={handleChange} />
        </div><br />

        <div>
          <label>Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div><br />

        <div>
          <label>Age:</label><br />
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div><br />

        <div>
          <label>Father's Name:</label><br />
          <input name="fatherName" value={formData.fatherName} onChange={handleChange} />
        </div><br />

        <div>
          <label>Mother's Name:</label><br />
          <input name="motherName" value={formData.motherName} onChange={handleChange} />
        </div><br />

        <div>
          <label>City:</label><br />
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
        </div><br />

        <div>
          <label>State:</label><br />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>West Bengal</option>
            <option>Delhi</option>
          </select>
        </div><br />

        <div>
          <label>Country:</label><br />
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div><br />

        <div>
          <label>College:</label><br />
          <select name="college" value={formData.college} onChange={handleChange}>
            <option value="">Select</option>
            <option>IIT Delhi</option>
            <option>IIT Bombay</option>
            <option>NIT Trichy</option>
            <option>VIT Vellore</option>
            <option>MIT Pune</option>
          </select>
        </div><br />

        <div>
          <label>Engineering Semester:</label><br />
          <select name="semester" value={formData.semester} onChange={handleChange}>
            <option value="">Select</option>
            <option>1st</option>
            <option>2nd</option>
            <option>3rd</option>
            <option>4th</option>
            <option>5th</option>
            <option>6th</option>
            <option>7th</option>
            <option>8th</option>
          </select>
        </div><br />

        <div>
          <label>Skills:</label><br />
          <select name="skills" value={formData.skills} onChange={handleChange}>
            <option value="">Select</option>
            <option>Python</option>
            <option>Java</option>
            <option>C++</option>
            <option>Web Development</option>
            <option>Machine Learning</option>
          </select>
        </div><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
