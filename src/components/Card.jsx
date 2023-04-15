import Star from "./../../public/images/star.png"

export default function(props)
{
   let badgeText;

   if(props.openSpots === 0)
   {
      badgeText = "SOLD OUT";
   }
   else if(props.location === "Online")
   {
      badgeText = "ONLINE";
   }

   return(
      <div className="card">
         {badgeText &&
            <div className="card-badge">
               {badgeText}
            </div>
         }

         <img className="card-image" src={`images/${props.coverImg}`}></img>
         
         <div className="card-stats">
            <img className="card-star" src={Star}></img>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
         </div>
         
         <p class="card-title">{props.title}</p>
         <p class="card-price"><span className="bold">From ${props.price}</span> / person</p>
      </div>
   )
}