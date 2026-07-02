
interface NonVegItem {
  id:number,
  name:string,
  imageUrl:string,
  price:number,
  description:string
}

function NonVeg() {

  const NonVegItems: NonVegItem[] = [
    {id:1,name:"chicken",imageUrl:"images/nonveg/chicken.webp",price:30,description:"fresh chicken"},
    {id:2,name:"crab",imageUrl:"images/nonveg/crab.webp",price:30,description:"fresh crab"},
    {id:3,name:"duck",imageUrl:"images/nonveg/duck.png",price:30,description:"fresh duck"},
    {id:4,name:"eggs",imageUrl:"images/nonveg/eggs.png",price:30,description:"fresh eggs"},
    {id:5,name:"fish",imageUrl:"images/nonveg/fish.png",price:30,description:"fresh fish"},
    {id:6,name:"mutton",imageUrl:"images/nonveg/mutton.png",price:30,description:"fresh mutton"},
    {id:7,name:"prawns",imageUrl:"images/nonveg/prawns.png",price:30,description:"fresh prawns"},
    {id:8,name:"sardiness",imageUrl:"images/nonveg/sardines.webp",price:30,description:"fresh sardines"},
    {id:9,name:"squid",imageUrl:"images/nonveg/squid.png",price:30,description:"fresh squid"},
    {id:10,name:"turkey",imageUrl:"images/nonveg/turkey.png",price:30,description:"fresh turkey"},
  ];

  let items = NonVegItems.map((nonVeg) => (
    <li>
      <img src={nonVeg.imageUrl} alt="" width={150} height={150}/>
        {nonVeg.name}
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

export default NonVeg
