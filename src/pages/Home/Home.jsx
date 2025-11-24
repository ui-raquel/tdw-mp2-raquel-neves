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

  const letUsChoose = films
    ? [...films]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    : [];

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Welcome to Studio Ghibli! <i class="bi bi-stars"></i></h1>
        <h2><i>Explore the magical world of Studio Ghibli films</i></h2>
      </div>

      <section>
        <h2>
          Highest Rated Films
        </h2>
        
        <div className="films-grid">
          {topFilms.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </section>

      <section>
        <h2>Let Us Choose For You!</h2>

        <div className="films-grid">
          {letUsChoose.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;
