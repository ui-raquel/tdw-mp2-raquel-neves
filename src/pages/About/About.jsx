function About() {
  return (
    <div>
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1>About this Project</h1>
        <p>This is a comprehensive web application dedicated to showcasing the magical world of Studio Ghibli films. </p>
        <p>This interactive platform serves as a discovery tool for one of the most celebrated animation studios in the world. </p>
        <p>The primary goal of this project is to create an immersive digital experience that honors the artistry and storytelling of Studio Ghibli while providing fans with an organized, user-friendly platform to explore the studio's rich filmography. </p>
      </section>

      <hr style={{ margin: "20px 0", height: "1px", background: "linear-gradient(90deg, transparent, rgba(155, 121, 186, 1), transparent)", border:"none" }}></hr>

      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "25px",
          width: "100%",
          paddingBottom: "40px",
          alignItems: "end",
        }}>
        <section className="card">
          <h2>Features</h2>
          <ol>
            <li>Browse Films: Users can explore a curated list of Studio Ghibli films, complete with detailed information about each movie, including synopses, release dates, directors, and ratings.</li>
            <li>Character Profiles: The application includes profiles of beloved characters from Studio Ghibli films, providing insights into their roles and significance within the stories.</li>
            <li>Species Information: Users can learn about the various species featured in Studio Ghibli films, enhancing their understanding of the studio's imaginative world-building.</li>
            <li>Search and Filter: The platform offers robust search and filtering capabilities, allowing users to easily find films based on criteria such as release date, rating, and title.</li>
            <li>Responsive Design: The application is designed to be fully responsive, ensuring an optimal viewing experience across a range of devices, from desktops to mobile phones.</li>
          </ol>
        </section>
        <section className="card">
          <h2>Technologies Used</h2>
          <ul>
            <li>React: The application is built using React, a popular JavaScript library for building user interfaces.</li>
            <li>Redux Toolkit: State management is handled using Redux Toolkit, providing a streamlined approach to managing application state.</li>
            <li>RTK Query: Data fetching and caching are managed with RTK Query, ensuring efficient and reliable API interactions.</li>
            <li>CSS: Styling is accomplished using CSS, with a focus on creating a visually appealing and user-friendly interface.</li>
            <li>Tailwind: Some components and layouts utilize Tailwind CSS for rapid UI development and consistent design.</li>
            <li>Studio Ghibli API: The application leverages the Studio Ghibli API to access detailed information about films, characters, and species.</li>
            <li>TMDB API: For additional film metadata and images, the application integrates with The Movie Database (TMDB) API.</li>
          </ul>
        </section>
        <section className="card">
          <h2>Data Source</h2>
          <p>The application utilizes the Studio Ghibli API, a public API that provides access to detailed information about Studio Ghibli films, characters, and species. This API serves as the backbone for the application's data, enabling users to explore the rich world of Studio Ghibli.</p>
          <p>The Screenshots section in Film Details uses The Movie Database (TMDB) API to fetch additional images related to each film, enhancing the visual experience for users.</p>
        </section>
        <section className="card">
          <h2>Future Enhancements</h2>
          <p>Planned future enhancements for the application include:</p>
          <ul>
            <li>User Reviews: Allowing users to submit and read reviews for each film.</li>
            <li>Watchlist Feature: Enabling users to create and manage a personal watchlist of favorite films.</li>
            <li>Social Sharing: Integrating social media sharing options to allow users to share their favorite films and characters.</li>
            <li>Multilingual Support: Expanding the application to support multiple languages for a broader audience.</li>
            <li>Enhanced Search: Implementing advanced search capabilities, including filters for genre and director.</li>
          </ul>
        </section>
        <section className="card">
          <h2>Developer</h2>
          <p>This project was developed by Raquel Neves as part of the coursework for the TDW class at Universidade de Aveiro.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
