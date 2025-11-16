export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #e3f2ff, #f8faff)",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        AI Resume Builder
      </h1>

      {/* Upload Resume Button */}
      <button
        onClick={() => (window.location.href = "/upload")}
        style={{
          padding: "12px 26px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "40px",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Upload Resume
      </button>

      <h2 style={{ marginBottom: "20px", marginTop: "10px" }}>Choose a Template</h2>

      {/* Template Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {/* Template 1 */}
        <div
          onClick={() => (window.location.href = "/template/template1")}
          style={{
            width: "220px",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>Template 1</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>Simple & Professional</p>
        </div>

        {/* Template 2 */}
        <div
          onClick={() => (window.location.href = "/template/template2")}
          style={{
            width: "220px",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>Template 2</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>Creative & Modern</p>
        </div>

        {/* Template 3 */}
        <div
          onClick={() => (window.location.href = "/template/template3")}
          style={{
            width: "220px",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
          }}
        >
          <h3 style={{ marginBottom: "5px" }}>Template 3</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>Minimal & Clean</p>
        </div>
      </div>
    </div>
  );
}
