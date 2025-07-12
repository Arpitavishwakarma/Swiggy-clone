

export default function Foodcard({foodData})
{


    return(
        <>
        <a href={foodData?.action?.link}>
        <img className="container mx-auto flex flex-nowrap overflow-x-auto mt-3 gap-1 w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        </>
    )
}