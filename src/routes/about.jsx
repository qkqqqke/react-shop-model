import getImageUrl from "../image-util";

export default function About(){

    return (

    <div className="about">
        <div className='about-section1'>
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quia dolor similique, quis et vel fugiat asperiores minima possimus unde officiis dolores impedit saepe aut error explicabo commodi sunt incidunt.
            </h1>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio id, itaque deserunt, adipisci quia dignissimos animi minus illo aspernatur asperiores eaque quam explicabo, minima ut aut. Sunt, non soluta?
                Consectetur reiciendis minus maxime animi vero quasi quia, velit, laborum, in eius rem. Nemo sunt facilis debitis alias architecto autem a repellat dicta. Tenetur natus dolores in iste, itaque ratione!
            </span>
        </div>
        <div className="about-contacts">
            <div className="contacts-list">
                <a href="">
                    <object data={getImageUrl('instagram-svgrepo-com-white.svg')} type="image/svg+xml">
                        <img src={getImageUrl('instagram-svgrepo-com-white.png')} alt="" />
                    </object>
                </a>
                <a href="">
                    <object data={getImageUrl('vk-svgrepo-com-white.svg')} type="image/svg+xml">
                        <img src={getImageUrl('vk-svgrepo-com-white.png')} alt="" />
                    </object>
                </a>
                <a href="">
                    <object data={getImageUrl('twitter-svgrepo-com-white.svg')} type="image/svg+xml">
                        <img src={getImageUrl('twitter-svgrepo-com-white.png')} alt="" />
                    </object>
                </a>
            </div>
        </div>
    </div>
    )
}