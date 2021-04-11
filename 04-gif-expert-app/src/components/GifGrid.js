const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Dragon+ball&limit=5&api_key=E6XKlDaflnlJEuXlIa9yvmurDzMynCXG`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      };
    });

    console.info( gifs );
  };

  getGifs();

  return (
    <h3>{ category }</h3>
  );
}

export default GifGrid;
