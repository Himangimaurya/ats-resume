export default function Template3() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "40px",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
        borderRadius: "15px",
        boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "32px",
          color: "#333",
        }}
      >
        Creative Resume
      </h1>

      <div
        style={{
          background: "rgba(255,255,255,0.8)",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        {/* Header Info */}
        <h2 style={{ color: "#444" }}>John Doe</h2>
        <p style={{ marginBottom: "20px", color: "#555" }}>
          Email: john@example.com | Phone: 123-456-7890
        </p>

        {/* About Section */}
        <h3 style={{ color: "#FF6F61" }}>Profile Summary</h3>
        <p style={{ marginBottom: "20px" }}>
          A passionate and creative student exploring technology, design and
          engineering with strong problem-solving abilities.
        </p>

        {/* Education */}
        <h3 style={{ color: "#FF6F61" }}>Education</h3>
        <p style={{ marginBottom: "20px" }}>
          B.Tech in Electronics & Communication Engineering — 2025
        </p>

        {/* Skills */}
        <h3 style={{ color: "#FF6F61" }}>Skills</h3>
        <ul style={{ color: "#333" }}>
          <li>JavaScript</li>
          <li>React / Next.js</li>
          <li>UI/UX Design</li>
          <li>HTML, CSS</li>
        </ul>
      </div>
    </div>
  );
}
