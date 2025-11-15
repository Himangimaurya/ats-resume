"use client";

import React, { useState } from "react";

export default function ManualForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    console.log("Backend response:", result);

    alert("Data sent to backend!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Fill Resume Details</h2>

      <div
        style={{
          marginTop: "20px",
          width: "80%",
          maxWidth: "500px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* NAME */}
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={styles.input}
        />

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        {/* PHONE */}
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          style={styles.input}
        />

        {/* SKILLS */}
        <textarea
          name="skills"
          placeholder="Skills (comma separated)"
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* EDUCATION */}
        <textarea
          name="education"
          placeholder="Education Details"
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* EXPERIENCE */}
        <textarea
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* PROJECTS */}
        <textarea
          name="projects"
          placeholder="Projects"
          onChange={handleChange}
          style={styles.textarea}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "12px",
    minHeight: "90px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    background: "#0070f3",
    color: "white",
    borderRadius: "8px",
    width: "100%",
    fontWeight: "600",
    border: "none",
  },
};
