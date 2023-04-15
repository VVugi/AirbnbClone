import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

import data from "./data.js"

import katie from "./../public/images/katie-zaferes.png"

export default function App()
{
   const cards = data.map(card => {
      return <Card
         key = {card.id}
         {...card}
      />
   });

   return (
      <div>
         <Navbar />
         <Hero />
         
         <section className="cards-list">
            {cards}
         </section>
      </div>
   )
}