import { getClient } from "@/lib/client";
import {gql} from "@apollo/client";
import Image from "next/image";

export const dynamic = "force-dynamic";

const query = gql`
query {
    characters{
      results {
        id
        name
        image
      }
    }
  }
`;



const ServerSide = async () => {
    const data = await getClient().query({
        query,
    })
    console.log(data, 'hello');
  return (
    <div className="">
        {
            data?.characters.results.map(character=>{
                return(
                    <div className="every-item" key={character.id}>
                        <Image src={character.image} width={360} height={300} alt="character image" className=""/>
                        <h2>{character.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ServerSide