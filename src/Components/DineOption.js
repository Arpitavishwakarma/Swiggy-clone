import {dineoutRestaurants} from "../Utils/DineData"
import DineCard from "./DineCard"


export default function DineOption(){

    return (
        <div>
        <div className="w-[80%] mx-auto mt-30 mb-30">
            <p className="text-2xl font-bold">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
               {
                dineoutRestaurants.map((RestData)=><DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>)
               }
            </div>
        </div>
        <img 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
            className="w-full mb-30"></img>
        </div>
    )
}