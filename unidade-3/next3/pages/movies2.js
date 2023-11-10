import useSWR from 'swr'
import Link from "next/link";

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=336d811d&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (
        <div>
          {data.Search.map((m) => (
            <div key={m.imdbID}>
              <Link href={`/movie/${m.imdbID}`}>
                <p>{m.Title}</p>
              </Link>
            </div>
          ))}
        </div>
      );  

}



async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}