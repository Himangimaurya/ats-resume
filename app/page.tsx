"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const btnStyle = {
    padding: "10px 20px",
    margin: "10px 0",
    fontSize: "18px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>AI Resume Builder</h1>

      {/* Upload Resume */}
      <button onClick={() => router.push("/upload")} style={btnStyle}>
        Upload Resume
      </button>

      {/* Fill Resume Manually */}
      <button onClick={() => router.push("/form")} style={btnStyle}>
        Fill Resume Manually
      </button>

      {/* Choose Template Page */}
      <button onClick={() => router.push("/template")} style={btnStyle}>
        Choose Resume Template
      </button>
    </div>
  );
}
