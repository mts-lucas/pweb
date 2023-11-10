import useSWR from 'swr'
import { useRouter } from "next/router";

export default function MovieDetail({ imdbID }){

    const router = useRouter();

    const { query } = router;

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=336d811d&i=${query.imdbID}`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
          <h1>{data.Title} ({data.Year})</h1>
          <img src={data.Poster} alt={data.Title} />
          <p>imDB Note: {data.imdbRating}</p>
        </div>
      ); 

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}