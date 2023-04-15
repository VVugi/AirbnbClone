import PhotoGrid from "./../../public/images/grid.png"

export default function()
{
   return(
      <section id="hero">
         <img id="hero-photo-grid" src={PhotoGrid}></img>
         <h1 id="hero-title">Online Experiences</h1>
         <p id="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </section>
   )
}