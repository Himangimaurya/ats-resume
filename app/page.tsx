"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-bg">
      <div className="home-overlay"></div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: "120px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "40px", fontWeight: 700 }}>
          AI Resume Builder
        </h1>

        <button
          onClick={() => router.push("/upload")}
          style={{
            background: "#007bff",
            color: "white",
            padding: "15px 32px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            marginBottom: "20px",
            width: "230px",
          }}
        >
          Upload Resume
        </button>
        <br />

        <button
          onClick={() => router.push("/form")}
          style={{
            background: "#007bff",
            color: "white",
            padding: "15px 32px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
            width: "230px",
          }}
        >
          Fill Resume Manually
        </button>
      </div>
    </div>
  );
}
