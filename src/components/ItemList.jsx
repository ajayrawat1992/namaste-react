import { ITEM_URL } from "../utils/constants"


const ItemList=({items})=>
{

 // console.log("items",items)
    return(
       <div >
        {items.map((item)=>(
            <div key={item.card.info.id} 
            className="my-4 border-gray-400 border-b-2 flex justify-betweens  ">                 
                <div className="w-9/12">
                <div className="text-left font-medium">{item.card.info.name}</div>
                <div className="text-left">{"₹"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
                <div className=" my-4 text-justify mr-3  ">{item.card.info.description}</div>                
            </div>  
            <div  className="w-3/12  relative " >
            <div className="absolute">
            <button className="bg-white p-2  mx-14 my-24 rounded-md border border-black">ADD +</button>
            </div>
            <img src={ITEM_URL + item.card.info.imageId} alt="food_image" className="w-full h-32 rounded-md  "/>
            
            </div>
            </div>
                          
        ))}
        
       </div>
    )
}
 export default ItemList