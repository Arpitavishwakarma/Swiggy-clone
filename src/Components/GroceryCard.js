

export default function Grocerycard({foodData})
{

    return(
        <div className="flex-none w-35 ">
        <a href={foodData?.action?.link} className="block">
        <img className="w-full h-45 object-cover rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h1 className="text-center text-xl text-gray-700 mt-3 font-bold whitespace-normal break-words">{foodData?.action?.text}</h1>
        </div>
    )
}