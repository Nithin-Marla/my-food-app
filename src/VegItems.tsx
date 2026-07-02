
interface VegItem {
  id:number,
  name:string,
  imageUrl:string,
  price:number,
  description:string
}

function VegItems() {

  const vegItems:VegItem[] = [
    {id:1,name:"brinjal",imageUrl:"images/veg/brinjal.png",price:30,description:"fresh brinjal"},
    {id:2,name:"cabbage",imageUrl:"images/veg/cabbage.png",price:30,description:"fresh cabbage"},
    {id:3,name:"capsicum",imageUrl:"images/veg/capsicum.png",price:30,description:"fresh capsicum"},
    {id:4,name:"carrot",imageUrl:"images/veg/carrot.webp",price:30,description:"fresh carrot"},
    {id:5,name:"cauliflower",imageUrl:"images/veg/cauliflower.webp",price:30,description:"fresh cauliflower"},
    {id:6,name:"cucumber",imageUrl:"images/veg/cucumber.png",price:30,description:"fresh cucumber"},
    {id:7,name:"onion",imageUrl:"images/veg/onion.webp",price:30,description:"fresh onion"},
    {id:8,name:"potato",imageUrl:"images/veg/potato.png",price:30,description:"fresh potato"},
    {id:9,name:"spinach",imageUrl:"images/veg/spinach.png",price:30,description:"fresh spinach"},
    {id:10,name:"tomato",imageUrl:"images/veg/tomato.png",price:30,description:"fresh tomato"},
  ];

  
    let items = vegItems.map((veg) => (
      <li>
        <img src={veg.imageUrl} alt="" width={150} height={150}/>
        {veg.name}
      </li>
    ));
  

  return (
    <>
     <ul>
      {items}
     </ul>
    </>
  )
}

export default VegItems
