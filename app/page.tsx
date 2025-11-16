export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9)", // elegant classy gradient
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "30px", color: "#0d47a1" }}>
        AI Resume Builder
      </h1>

      <button
        onClick={() => (window.location.href = "/upload")}
        style={{
          padding: "12px 30px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        Upload Resume
      </button>

      <button
        onClick={() => (window.location.href = "/form")}
        style={{
          padding: "12px 30px",
          backgroundColor: "#0d47a1",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Fill Resume Manually
      </button>
    </div>
  );
}
