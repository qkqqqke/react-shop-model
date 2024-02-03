import { Link } from 'react-router-dom';
import getCatalog from '../catalog';
import { useLoaderData } from 'react-router-dom';
import getImageUrl from "../image-util";

export async function loader(){
const clothes = await getCatalog();
return { clothes };
}

export default function Catalog(){
    const { clothes } = useLoaderData();
    console.log(clothes)

    return (<>
        <div id="catalog">
            {
            clothes.length ? 
            (<>{ clothes.map((item,index)=> (
            <Link to={`/${item.name}`} key={item.name}  style={{ textDecoration: 'none', color: 'white'}}> 
            <div  className='catalog-item' >
                
                <div>
                    {item.name}
                </div>
                <img src={getImageUrl(item.img)} alt={item.name} />
                
                <div className="description">
                    {item.description}
                </div>
            </div>
            </Link>
            )) }</>
            ):
            <div> Unfortunately, there are no products yet. </div>
            }
        </div>
    </>);
}