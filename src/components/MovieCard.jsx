const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className='movie' key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={
            Poster !== 'N/A'
              ? Poster
              : 'https://via.assets.so/img.jpg?w=400&h=400&gradient=linear-gradient%28135deg%2C+%23ffecd2%2C+%23fcb69f%2C+%23a1c4fd%2C+%23c2e9fb%29&text=+&f=png'
          }
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
