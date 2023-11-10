import React from 'react';

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.MYKEY}&s=avengers&y=2019`);
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

export default function MoviesAge({ data }) {
  return (
    <div>
      <div>
        {data.Search.map((m) => (
          <div key={m.imdbID} className="movie-card">
            <img src={m.Poster} alt={m.Title} className="movie-poster" />
            <div className="movie-title">{m.Title} ({m.Year})</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .movie-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .movie-poster {
          width: 200px; /* Tamanho padrão para o cartaz do filme */
        }
        .movie-title {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
