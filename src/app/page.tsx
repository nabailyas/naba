import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f4c81, #1e88e5)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
        }}
      >
        <h2>NABA ILYAS</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <span>Home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "60px 30px",
        }}
      >
        {/* Left Side */}
        <div style={{ maxWidth: "550px" }}>
          <h1 style={{ fontSize: "55px", marginBottom: "15px" }}>
            Hi, I'm <br />
            <span style={{ color: "#FFD54F" }}>NABA ILYAS</span>
          </h1>

          <h3>AI Developer</h3>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            I build modern websites, AI-powered applications, and innovative
            digital solutions using the latest technologies.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              background: "#FFD54F",
              color: "#0f4c81",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Right Side - Profile Picture */}
        <div>
          <Image
            src="/profile.jpg"
            alt="NABA ILYAS"
            width={320}
            height={320}
            style={{
              borderRadius: "50%",
              border: "6px solid white",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        © 2026 NABA ILYAS | AI Developer
      </footer>
    </main>
  );
}
