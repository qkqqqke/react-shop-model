import { redirect, useLoaderData } from "react-router-dom"
import { getItemFromCatalog } from "../catalog";
import getImageUrl from "../image-util";



export async function loader({ params }){
const item = getItemFromCatalog(params.itemName);
return { item };
}

export default function ItemPage(){
    const { item } = useLoaderData();
    if(!item) redirect('/error-pgae')
    
    return (<>
        
        <div className="item-page">
            <div className="name-image-block">
                <div className="name">
                    <h2 className="itemPage-h2">{item.name}</h2>
                </div>
                <div className="image-container">
                    <img src={getImageUrl(item.img)} alt="" />
                </div>
            </div>
            <div className="description">
                {item.description}
            </div>
        </div>
        
    </>)
}