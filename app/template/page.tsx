"use client";

import { useRouter } from "next/navigation";

export default function TemplatePage() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Select a Resume Template</h1>

      <div style={{ marginTop: "30px" }}>
<button
  onClick={() => router.push("/template/template1")}
  style={btnStyle}
>
  Template 1
</button>

<button
  onClick={() => router.push("/template/template2")}
  style={btnStyle}
>
  Template 2
</button>

<button
  onClick={() => router.push("/template/template3")}
  style={btnStyle}
>
  Template 3
</button>

      </div>
    </div>
  );
}

const btnStyle = {
  padding: "12px 20px",
  margin: "10px",
  background: "#0070f3",
  color: "white",
  borderRadius: "8px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
};
