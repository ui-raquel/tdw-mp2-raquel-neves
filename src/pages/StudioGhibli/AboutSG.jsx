function AboutSG() {
  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>What Is Studio Ghibli?</h1>
      <p>Founded in 1985 by visionary directors Hayao Miyazaki and Isao Takahata, Studio Ghibli has produced numerous critically acclaimed films, including "My Neighbor Totoro," "Spirited Away," and "Princess Mononoke." Their works often explore themes of environmentalism, pacifism, and the complexities of human nature, resonating with audiences of all ages.</p>
      <p>Studio Ghibli's influence extends beyond animation, inspiring filmmakers, artists, and fans worldwide. Their commitment to quality storytelling and artistry has cemented their legacy as one of the most beloved animation studios in history.</p>
      <p>Whether you're a longtime fan or new to their films, Studio Ghibli offers a magical journey filled with wonder, emotion, and timeless tales.</p>
      <section className="card" style={{ justifyContent: "center", textAlign: "center" }}>
        <h2>Key Figures Behind Studio Ghibli</h2>
          <h3>Hayao Miyazaki</h3> Co-founder and visionary director known for his imaginative storytelling and iconic films like "Spirited Away" and "My Neighbor Totoro."
            <img src="/images/hayao-miyazaki.jpg" alt="Hayao Miyazaki" className="figures-img" />
          <h3>Isao Takahata</h3> Co-founder and acclaimed director of films such as "Grave of the Fireflies" and "The Tale of the Princess Kaguya," known for his poignant narratives.
            <img src="/images/isao_takahata.webp" alt="Isao Takahata" className="figures-img" />
          <h3>Toshio Suzuki</h3> Producer and key figure in Ghibli's success, instrumental in bringing many of the studio's projects to fruition.
            <img src="/images/toshio-suzuki.avif" alt="Toshio Suzuki" className="figures-img" />
          <h3>Joe Hisaishi</h3> Renowned composer whose evocative scores have become synonymous with Ghibli films, enhancing their emotional depth.
            <img src="/images/joe-hisaishi.jpg" alt="Joe Hisaishi" className="figures-img" />
      </section>
      <section className="card">
        <h2>Cultural Impact</h2>
        <p>Studio Ghibli's films have left an indelible mark on global culture, influencing not only the animation industry but also inspiring countless artists and storytellers. Their works have sparked discussions on important social issues, fostered a deeper appreciation for Japanese culture, and created a dedicated fanbase that spans generations.</p>
        <p>Through their timeless stories and stunning visuals, Studio Ghibli continues to enchant audiences worldwide, reminding us of the power of imagination and the beauty of storytelling.</p>
      </section>
    </div>
  );
}

export default AboutSG;
