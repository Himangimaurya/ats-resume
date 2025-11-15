export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>AI Resume Builder</h1>

      <div style={{ marginTop: "30px" }}>
        <a href="/upload" style={button}>Upload Resume</a>
        <br /><br />
        <a href="/form" style={button}>Fill Resume Manually</a>
      </div>
    </div>
  );
}

const button = {
  padding: "12px 20px",
  background: "#0070f3",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  fontWeight: "600",
};

  
          
              