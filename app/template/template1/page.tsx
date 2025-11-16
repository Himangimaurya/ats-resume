export default function Template1() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          color: "#333",
          letterSpacing: "1px",
        }}
      >
        Resume Template 1
      </h1>

      {/* Name */}
      <h2 style={{ fontSize: "24px", marginBottom: "5px", color: "#222" }}>
        John Doe
      </h2>

      {/* Contact */}
      <p style={{ marginBottom: "25px", fontSize: "16px", color: "#555" }}>
        Email: john@example.com | Phone: 123-456-7890
      </p>

      {/* Section Title */}
      <h3 style={{ color: "#0056D2", fontSize: "20px", marginBottom: "8px" }}>
        Profile Summary
      </h3>
      <p style={{ marginBottom: "20px", color: "#444" }}>
        Highly motivated student with strong problem-solving skills and an
        interest in technology and engineering.
      </p>

      {/* Education */}
      <h3 style={{ color: "#0056D2", fontSize: "20px", marginBottom: "8px" }}>
        Education
      </h3>
      <p style={{ marginBottom: "20px", color: "#444" }}>
        B.Tech in Electronics & Communication Engineering — 2025
      </p>

      {/* Skills */}
      <h3 style={{ color: "#0056D2", fontSize: "20px", marginBottom: "8px" }}>
        Skills
      </h3>
      <ul style={{ color: "#444" }}>
        <li>JavaScript</li>
        <li>React / Next.js</li>
        <li>HTML, CSS</li>
      </ul>
    </div>
  );
}
