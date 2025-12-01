function Footer() {
  return (
    <footer style={{ textAlign: "center", color: "white", padding: "20px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", marginTop: "40px" }}>
      <p>&copy; {new Date().getFullYear()} Raquel Neves | <a style={{color: "white", textDecoration: "underline"}} href="https://github.com/ui-raquel/tdw-mp2-raquel-neves">GitHub Repository</a></p>
      <p>Universidade de Aveiro | MCTW</p>
    </footer>
  );
}
export default Footer;