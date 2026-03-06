export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#000",
        color: "#fff",
      }}
    >
      <div>NixCodex</div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#">Projects</a>
        <a href="#">Tools</a>
        <a href="#">Blog</a>
      </div>
    </nav>
  );
}