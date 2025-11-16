export default function Template2() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "900px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* LEFT SIDEBAR */}
      <div
        style={{
          width: "30%",
          background: "#004AAD",
          color: "white",
          padding: "30px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>John Doe</h2>
        <p>Email: john@example.com</p>
        <p>Phone: 123-456-7890</p>

        <h3 style={{ marginTop: "30px" }}>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React / Next.js</li>
          <li>HTML, CSS</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          width: "70%",
          padding: "40px",
          background: "#f9f9f9",
        }}
      >
        <h2
          style={{
            color: "#004AAD",
            borderBottom: "2px solid #004AAD",
            paddingBottom: "5px",
          }}
        >
          Profile Summary
        </h2>
        <p style={{ margin: "20px 0" }}>
          Highly motivated student with strong problem-solving skills and an
          interest in technology and engineering.
        </p>

        <h2
          style={{
            color: "#004AAD",
            borderBottom: "2px solid #004AAD",
            paddingBottom: "5px",
            marginTop: "30px",
          }}
        >
          Education
        </h2>
        <p>B.Tech in Electronics & Communication Engineering — 2025</p>
      </div>
    </div>
  );
}


          
