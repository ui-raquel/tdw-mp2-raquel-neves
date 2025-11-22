function About() {
  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>About this Project</h1>
        <p>This is a web application dedicated to showcasing the magical world of Studio Ghibli films. </p>
        <p>This interactive platform serves as a discovery tool for one of the most celebrated animation studios in the world. </p>
        <p>The primary goal of this project is to create an immersive digital experience that honors the artistry and storytelling of Studio Ghibli while providing fans with an organized, user-friendly platform to explore the studio's rich filmography. </p>
      </section>

      <hr style={{ margin: "20px 0", height: "1px", background: "linear-gradient(90deg, transparent, rgba(155, 121, 186, 1), transparent)", border:"none" }}></hr>

      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "25px",
          width: "100%",
          paddingBottom: "40px",
          alignItems: "end",
          textAlign: "left"
        }}>
        <section className="card">
          <h2><i class="bi bi-display"></i> Features</h2>
          <ol>
            <li><strong>Browse Films:</strong> Users can explore a curated list of Studio Ghibli films, complete with detailed information about each movie, including synopses, release dates, directors, and ratings.</li>
            <li><strong>Character Profiles:</strong> The application includes profiles of beloved characters from Studio Ghibli films, providing insights into their roles and significance within the stories.</li>
            <li><strong>Species Information:</strong> Users can learn about the various species featured in Studio Ghibli films, enhancing their understanding of the studio's imaginative world-building.</li>
            <li><strong>Search and Filter:</strong> The platform offers robust search and filtering capabilities, allowing users to easily find films based on criteria such as release date, rating, and title.</li>
            <li><strong>Responsive Design:</strong> The application is designed to be fully responsive, ensuring an optimal viewing experience across a range of devices, from desktops to mobile phones.</li>
          </ol>
        </section>
        <section className="card">
          <h2><i class="bi bi-code-square"></i> Technologies Used</h2>
          <ul>
            <li><strong>React:</strong> The application is built using React, a popular JavaScript library for building user interfaces.</li>
            <li><strong>Redux Toolkit:</strong> State management is handled using Redux Toolkit, providing a streamlined approach to managing application state.</li>
            <li><strong>RTK Query:</strong> Data fetching and caching are managed with RTK Query, ensuring efficient and reliable API interactions.</li>
            <li><strong>CSS:</strong> Styling is accomplished using CSS, with a focus on creating a visually appealing and user-friendly interface.</li>
            <li><strong>Tailwind:</strong> Some components and layouts utilize Tailwind CSS for rapid UI development and consistent design.</li>
            <li><strong>Studio Ghibli API:</strong> The application leverages the Studio Ghibli API to access detailed information about films, characters, and species.</li>
            <li><strong>TMDB API:</strong> For additional film metadata and images, the application integrates with The Movie Database (TMDB) API.</li>
          </ul>
        </section>
        <section className="card">
          <h2><i class="bi bi-database"></i> Data Source</h2>
          <p>The application utilizes the Studio Ghibli API, a public API that provides access to detailed information about Studio Ghibli films, characters, and species. This API serves as the backbone for the application's data, enabling users to explore the rich world of Studio Ghibli.</p>
          <p>The Screenshots section in Film Details uses The Movie Database (TMDB) API to fetch additional images related to each film, enhancing the visual experience for users.</p>
        </section>
        <section className="card">
          <h2><i class="bi bi-check-circle"></i> Possible Enhancements</h2>
          <p>Possible future enhancements for the application include:</p>
          <ul>
            <li><strong>User Reviews:</strong> Allowing users to submit and read reviews for each film.</li>
            <li><strong>Watchlist Feature:</strong> Enabling users to create and manage a personal watchlist of favorite films.</li>
            <li><strong>Social Sharing:</strong> Integrating social media sharing options to allow users to share their favorite films and characters.</li>
            <li><strong>Multilingual Support:</strong> Expanding the application to support multiple languages for a broader audience.</li>
            <li><strong>Enhanced Search:</strong> Implementing advanced search capabilities, including filters for genre and director.</li>
          </ul>
        </section>
        <section className="card" style={{ textAlign: "center"}}>
          <h2><i class="bi bi-person-badge"></i> Developer</h2>
          <p>This project was developed by Raquel Neves as part of the coursework for the TDW class at Universidade de Aveiro.</p>
          <p><i class="bi bi-heart-fill" style={{ color: "darkred" }}></i> Thank you for visiting and exploring the world of Studio Ghibli through this application.</p>
          <br></br>
          <p><em>Raquel Neves | 112815</em></p>
        </section>
      </div>
    </div>
  );
}

export default About;
