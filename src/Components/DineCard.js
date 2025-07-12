
export default function DineCard({RestData}){


    return (
       <div className="max-w-sm flex-none">
          
        <a target="_blank" href={RestData.cta.link} className="block">
          <div className="relative">
            <img
                className="w-80 h-48 object-cover rounded-2xl "
                src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                RestData?.info?.mediaFiles[0]?.url
                }
                alt="Restaurant"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
              <p className="absolute bottom-2 left-2 text-xl text-white font-bold z-10">
              {RestData.info.name}
              </p>
              <p className="absolute bottom-2 right-2 text-xl text-white z-10">
              {RestData?.info?.rating?.value}
              </p>
          </div>
          <div className="px-4 py-2 flex-row">
            <div className="flex justify-between align-center">
              <p className="text-gray-700">
                {RestData?.info?.cuisines.join(", ")}
              </p>
              <p className="text-gray-700">
                {RestData?.info?.costForTwo}
              </p>
            </div>
            <div className="flex justify-between align-center">
              <p className="text-gray-700">{RestData?.info?.locality}</p>
              <p className="text-gray-700">{RestData?.info?.locationInfo?.distanceString}</p>
            </div>
          </div>
        </a>


       </div>
    )

}



{/* <div className="max-w-sm flex-none rounded-t-2xl">
       <a target="_blank" href={RestData.cta.link}>
        <div className="rounded-2xl shadow-lime-300">
        <div className="relative">
          <img
            className="w-80 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>
        <div className="flex justify-between">
          <p>{RestData?.info?.cuisines}</p>
          <p>{RestData?.info?.costForTwo}</p>
        </div>
        </div>
        </a>
       
      </div> */}