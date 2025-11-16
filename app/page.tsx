export default function HomePage() {
  return (
    <div className="home-bg" style={{ textAlign: "center", paddingTop: "40px" }}>
      <h1
        style={{
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        AI Resume Builder
      </h1>

      {/* Upload Resume Button */}
      <button
        onClick={() => (window.location.href = "/upload")}
        style={{
          padding: "12px 22px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Upload Resume
      </button>

      <br />

      {/* Template 1 Button */}
      <button
        onClick={() => (window.location.href = "/template/template1")}
        style={{
          padding: "12px 22px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Template 1
      </button>

      <br />

      {/* Template 2 Button */}
      <button
        onClick={() => (window.location.href = "/template/template2")}
        style={{
          padding: "12px 22px",
          backgroundColor: "#ffc107",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Template 2
      </button>

      <br />

      {/* Template 3 Button */}
      <button
        onClick={() => (window.location.href = "/template/template3")}
        style={{
          padding: "12px 22px",
          backgroundColor: "#6f42c1",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Template 3
      </button>
    </div>
  );
}
