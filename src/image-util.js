export default function getImageUrl(name){
    return new URL(`./imgs/${name}`, import.meta.url).href
}