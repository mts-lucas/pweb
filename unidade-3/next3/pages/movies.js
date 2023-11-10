export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.MYKEY}&s=bagdad`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }


export default function Movies({data}){

    return (

        <div>

            <div>

            {data.Search.map( (m) => <div>{m.Title} --- {m.Year}</div>  )}               

            </div>

        </div>

    )

}