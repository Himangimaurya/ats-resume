"use client";

import React, { useState } from "react";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("/api/process", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      alert(result.message);
      console.log("Backend Response:", result);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading file!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Upload Your Resume</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ marginTop: "20px" }}
      />

      <button
        onClick={handleUpload}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          background: "#0070f3",
          color: "white",
          borderRadius: "8px",
          border: "none",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Upload
      </button>
    </div>
  );
}



  