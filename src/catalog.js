import getImageUrl from "./image-util";

export default function getCatalog(){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(clothes)},300)
    })
}

export function getItemFromCatalog(itemName){
    for(let i =0; i < clothes.length; i++){
        if(clothes[i].name == itemName){
            return clothes[i];
        }
    }
}

const clothes = [{
    name: 'tshirt1',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt2',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt3',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt4',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt5',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt6',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt7',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt8',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt9',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt10',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt11',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt12',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt13',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt14',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},
{
    name: 'tshirt15',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},{
    name: 'tshirt16',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
},{
    name: 'tshirt17',
    description:`Lorem ipsum dolor dq wqf  sdqwdssdafdwqsit amet consectetur adipisicing elit. Dicta repellendus distinctio soluta? Corporis aperiam, aspernatur minima laborum illum enim repellat iure itaque impedit unde? Quisquam fuga officiis omnis voluptate placeat.
                    Reiciendis corporis fugit totam veritatis, itaque, eveniet consequuntur amet exercitationem autem vel illo? Possimus velit, asperiores aperiam architecto incidunt ut maiores sint atque explicabo porro sit ipsam iusto nam tenetur.
                    Corporis provident doloremque consectetur praesentium sit mollitia earum porro? Dignissimos obcaecati assumenda iure nihil quo quibusdam doloribus, expedita dicta, at velit accusamus adipisci explicabo, rerum eaque magnam laboriosam repudiandae sapiente.
                    Et numquam nam aspernatur a delectus molestias praesentium rerum facere soluta totam nemo, maiores odit minima eos autem pariatur tempora corporis nisi illum id iste fuga recusandae. Perferendis, quod veniam.
                    Minima fuga excepturi voluptatum similique id enim adipisci odio, alias ullam consectetur obcaecati illum. Tempora quod saepe ducimus, fuga voluptates et hic natus voluptatum quidem totam, vero aliquid suscipit rerum.`,
    img: 'image.png'
}]