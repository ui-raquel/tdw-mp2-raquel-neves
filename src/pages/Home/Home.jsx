import { useGetFilmsQuery } from "../../store/api/ghibliApi";
import FilmCard from "../../components/films/FilmCard/FilmCard.jsx";

function Home() {
  const { data: films, error, isLoading } = useGetFilmsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;


  const topFilms = films 
    ? [...films]
        .sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score))
        .slice(0, 3)
    : [];

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Welcome to Studio Ghibli!</h1>
        <p>Explore the magical world of Studio Ghibli films</p>
      </div>

      <section>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Highest Rated Films
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
          gap: "25px",
        }}>
          {topFilms.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
