export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="title">AI Resume Builder</h1>

      <div className="button-group">
        <button onClick={() => (window.location.href = "/upload")}>
          Upload Resume
        </button>

        <button onClick={() => (window.location.href = "/manual")}>
          Fill Resume Manually
        </button>
      </div>

      <h2 className="template-title">Choose a Template</h2>

      <div className="template-container">

        <div
          className="template-card"
          onClick={() => (window.location.href = "/template/template1")}
        >
          Template 1
        </div>

        <div
          className="template-card"
          onClick={() => (window.location.href = "/template/template2")}
        >
          Template 2
        </div>

        <div
          className="template-card"
          onClick={() => (window.location.href = "/template/template3")}
        >
          Template 3
        </div>

      </div>
    </div>
  );
}
