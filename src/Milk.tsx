

interface MilkItem {
  id:number,
  name:string,
  imageUrl:string,
  price:number,
  description:string
}

function Milk() {

  const MilkItems: MilkItem[] = [
    {id:1,name:"butter milk",imageUrl:"images/milk/butter-milk.png",price:30,description:"fresh butter milk"},
    {id:2,name:"butter",imageUrl:"images/milk/butter.webp",price:30,description:"fresh butter"},
    {id:3,name:"cheese",imageUrl:"images/milk/cheese.webp",price:30,description:"fresh cheese"},
    {id:4,name:"cream",imageUrl:"images/milk/cream.png",price:30,description:"fresh cream"},
    {id:5,name:"curd",imageUrl:"images/milk/curd.webp",price:30,description:"fresh curd"},
    {id:6,name:"ghee",imageUrl:"images/milk/ghee.png",price:30,description:"fresh ghee"},
    {id:7,name:"ice cream",imageUrl:"images/milk/ice-cream.png",price:30,description:"fresh ice cream"},
    {id:8,name:"milk",imageUrl:"images/milk/milk.webp",price:30,description:"fresh milk"},
    {id:9,name:"paneer",imageUrl:"images/milk/paneer.webp",price:30,description:"fresh paneer"},
    {id:10,name:"yogurt",imageUrl:"images/milk/yogurt.png",price:30,description:"fresh yogurt"},
  ];

  let items = MilkItems.map((milkItem) => (
    <li>
      <img src={milkItem.imageUrl} alt="" width={150} height={150}/>
        {milkItem.name}
    </li>
  ))


  return (
    <>
    <ul>
      {items}
    </ul>
    </>
  )
}

export default Milk
