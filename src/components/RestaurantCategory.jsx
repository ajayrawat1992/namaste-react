import ItemList from "./ItemList";

const RestaurantCategory=({category,showIndex,setShowIndex})=>{
   //  const [showItems,setShowItems]=useState(false)
   //console.log("2222",showIndex)
    const ClickShowItems=()=>
    {
      setShowIndex()
    }

//console.log("category",category)

   return (
  <div>
   <div className=" w-6/12 mx-auto my-4  mt-6 shadow-lg p-4" onClick={ClickShowItems}>
      <div className="flex justify-between cursor-pointer">
 <span className="font-bold">{category.title}({category.itemCards.length})</span>
 <span>🔽</span>
 </div>
 {showIndex && <ItemList items={category.itemCards}/>} 
  </div>
  </div>
   )
};

export default RestaurantCategory