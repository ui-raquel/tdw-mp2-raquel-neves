import { useGetFilmByIdQuery } from "../../store/api/ghibliApi";
import { useParams } from "react-router-dom";

function FilmDetail() {
  const { id } = useParams();
  const { data: film, error, isLoading } = useGetFilmByIdQuery(id);

  if (isLoading) return <div>Loading films...</div>;
  if (error) return <div>Error loading films: {error.message}</div>;
  if (!film) return <div>No films found</div>;

  return (
    <section style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{film.title}</h1>
      <h3 style={{ marginBottom: "40px"}}><i>{film.original_title} ({film.original_title_romanised})</i></h3>
      <section style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: "1" }}>
          <img src={film.image} alt={film.title} onMouseOver={(e) => {
                  e.target.style.transform = "rotate(-2deg)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                  e.target.style.transition = "transform 0.3s, box-shadow 0.3s";
                }} onMouseOut={(e) => {
                  e.target.style.transform = "none";
                  e.target.style.boxShadow = "none";
                }} style={{ borderRadius: "8px" }}
          />
        </div>
        <div style={{ flex: "3" }}>
          <h2 style={{ margin: "20px 0" }}>Film Description</h2>
          <p>{film.description}</p>
        </div>
      </section>
      <hr style={{ margin: "20px 0", height: "1px", background: "linear-gradient(90deg, transparent, rgba(155, 121, 186, 1), transparent)", border:"none" }}></hr>
      <section style={{ marginTop: "20px", textAlign: "left" }}>
        <h2 style={{ margin: "20px 0" }}>Details</h2>
        <p>
          <strong>Director:</strong> {film.director}
        </p>
        <p>
          <strong>Producer:</strong> {film.producer}
        </p>
        <p>
          <strong>Release Date:</strong> {film.release_date}
        </p>
        <p>
          <strong>Rotten Tomatoes Score:</strong> ⭐ {film.rt_score}/100
        </p>
      </section>
    </section>
  );
}

export default FilmDetail;
