import React from 'react'
import NewOne from "./NewOne";

const About = () => {
    let products=[
        {
            image:"https://tse3.mm.bing.net/th?id=OIP.UBLjWElaVyoB-fa9iRgWegHaFc&pid=Api&P=0&h=180",
            name:"Bmw",
            prix:190000
        },
        {
            image:"https://tse3.mm.bing.net/th?id=OIP.cMcHzt0nzgNf7qvSUw1pvQHaDv&pid=Api&P=0&h=180",
            name:"Audi",
            prix:120000
        },
        {
            image:"https://tse1.mm.bing.net/th?id=OIP.EJ5o6XcgZGQinK_7Ny3JTgHaE8&pid=Api&P=0&h=180",
            name:"Marcedes",
            prix:250000
        },
    ]
  return (
    <div className='about'>
            <h1>Products</h1>
     
     {products.map(el=><NewOne el={el} />)}
    </div>
  )
}

export default About
