function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        alignItems: "center",
        background: "linear-gradient(135deg, #f3e7ffff 0%, #d4c1faff 100%)",
        color: "white",
      }}
    >
      <header
        style={{
          width: "100%",
          padding: "20px 0",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          marginBottom: "30px",
          textAlign: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "10px"}}>スタジオジブリ</h2>

        <hr
          style={{
            width: "20%",
            margin: "10px auto",
            border: "1px solid",
          }}
        ></hr>

        <h1
          style={{
            margin: "0 0 15px 0",
            fontSize: "2.5rem",
            fontFamily: "Noto Sans JP, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Studio Ghibli
        </h1>

        <nav
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {[
            "/",
            "/StudioGhibli",
            "/films",
            "/characters",
            "/species",
            "/about",
          ].map((path, index) => {
            const names = [
              "Home",
              "Studio",
              "Films",
              "Characters",
              "Species",
              "About",
            ];
            return (
              <a
                key={path}
                href={path}
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  background: "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255,255,255,0.3)",
                  fontWeight: "500",
                  minWidth: "100px",
                }}
                onMouseOver={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.4)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.2)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {names[index]}
              </a>
            );
          })}
        </nav>
      </header>

      <main
        style={{
          width: "100%",
          maxWidth: "100vw",
          padding: "0 20px",
          boxSizing: "border-box",
          color: "#481e67ff",
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
