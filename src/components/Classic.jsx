import React from "react";
import CarCard from "./CarCard";

import mer11 from '../car-images/mer11.avif';
import she12 from "../car-images/she12.avif";
import fer13 from "../car-images/fer13.avif";
import ast14 from "../car-images/ats14.avif";
import lin15 from "../car-images/lin15.avif";
import lam16 from "../car-images/lam16.avif";
import chev17 from "../car-images/chev17.avif";
import dog18 from "../car-images/dog18.avif";

const Classic = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <CarCard
        image={mer11}
        name=" Mercedez Benz 500SL Gullwing"
        description="That the Mercedes-Benz 300SL Gullwing is beautiful is obvious, that it's an engineering masterpiece, is hopefully also obvious as it's on this list. Introduced in 1954 and derived from Mercedes’ dominant W194 race car, the 300SL packed cutting-edge technology for its era, including the first fuel-injected production engine and a lightweight tubular spaceframe chassis. That innovative frame left little room for traditional doors, giving rise to the now-legendary gullwing design that made the car instantly recognizable. Fast, elegant, and wildly advanced for its time, the 300SL became the standard in super cars."
        price=""
        />

        <CarCard
        image={she12}
        name="Shelby Cobra"
        description="We like our cars like our sentences: shapely, indicative of craft, speed, and love of the game. The veneer of British gentility, with an American heart. Hence our love of the Shelby Cobra. Carroll Shelby took the featherweight British chassis and put a Ford V8 in it: a marriage of beauty and brawn that led to a peerless vehicle.

        What's available to us with just a picture of the Shelby Cobra? Well, some understanding of Shelby's ability to wrangle refinement with raw power. A few details: the long hood and short deck, giving it the appearance of movement even when it's parked; the exposed, not-so-subtle exhaust pipes that promise noise; the low windshield with minimal chrome signifies a no-frills readiness; and though it's not so visible here, the cobra badging—the ultimate symbol of lithe and regal mother nature who will seriously fuck up your day if you mess with it."
        price=""
        />

        <CarCard
        image={fer13}
        name="Ferrari 250 GTO"
        description= "About his obsession, Enzo Ferrari said, I build engines and attach wheels. He also said, A race car is neither beautiful nor ugly. They become beautiful when they win. These two quotes demonstrate the mind of a craftsman, specifically a craftsman who in life—when you strip everything else away— had the sole desire to go faster than the other guy. A competitor on the cellular level, il Commendatore, despite his claim that the look of the car didn't matter, still built some of the most beautiful cars ever built, chief among them (in my opinion), the 250 GTO. Only 36 were built, the last one sold went for $70 million, but there's something universal about the shape of this car that appeals to anyone, from the country bumpkin to the silver spoon aesthete."
        price=""
        />

        <CarCard
        image={ast14}
        name="Aston Martin DB5"
        description="The DB5 became a star alongside Sean Connery in 1964’s Goldfinger. Even stripped of its Bond-spec gadgets, this car was a high-performance specimen in the ‘60s—disc brakes at all four corners, independent suspension, and a top speed of 145 mph, to name a few highlights. It continues to be a sought-after collectors item, and the 007 legacy endures: Aston Martins have appeared in 12 James Bond films, including four different models featured in 2021’s No Time to Die."
        price=""
        />

        <CarCard
        image={lin15}
        name="Lincoln Continental"
        description="The Continental began as a passion project for Edsel Ford, son of Henry, and a way to one-up his dad. The original Continental was a sensation when it debuted in 1939, but the fourth generation, produced from 1961 to ‘69 is arguably the most iconic. Its sharp, restrained look oozed Space Age glamour, and it became the ride of choice for Presidents and royalty (a ‘65 model even had a starring role in The Matrix). It’s a design that still looks fresh and surprisingly modern today."
        price=""
        />

        <CarCard
        image={lam16}
        name="Lamborghini Countach"
        description="When most people think of a supercar, they’re imagining a Lamborghini Countach. With its scissor doors and wedge-shaped body, it looks like something out of Star Wars, and it has rocket booster power on tap thanks to its massive V12. Top Gear writer Ollie Marriage drove one up the famed Stelvio Pass in Italy and called it “proud, boisterous, inflexible, and as raw as a wound.” Exactly what you’d expect from the world’s first supercar."
        price=""
        />

        <CarCard
        image={chev17}
        name="Chevrolet Corvette"
        description="Yes, the Corvette is certified Boomer bait, but no other model can claim the title of “America’s Sports Car.” Born from humble beginnings in the ‘50s, it became a fire-breathing, V8-powered monster, with gorgeous styling to match, in its second generation. The Vette’s horsepower sagged in the Malaise Era and it was discontinued after 1982. But it roared back to life in ‘84 with a thorough redesign and performance that could beat Ferraris and Porsches on the race track. Now in its eighth generation, it’s just as iconic as ever."
        price=""
        />

        <CarCard
        image={dog18}
        name="Dodge Charger Daytona"
        description="Like many great cars in history, the Daytona was born from a desire to win races. In this case, Chrysler wanted to kick ass in NASCAR, Car and Driver Senior Editor Elana Scherr explains, and to do it, the designers at Dodge came up with a ‘60s muscle car on steroids. The Daytona set multiple land speed records and laid down the first motorsports lap over 200 mph. The Daytona wasn’t just fast, Scherr notes, it also broke new ground for automotive aerodynamics and influenced vehicle design decades later. Plus, it looked like something that could launch you into orbit."
        price=""
        />

        
     
    </div>
  );
};

export default Classic;