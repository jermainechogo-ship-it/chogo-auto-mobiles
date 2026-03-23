import React from "react";
import CarCard from "./CarCard"; // This works only if CarCard.jsx exists in the same folder

// Import images from car-images folder
import rolls from "../car-images/rolls.jpg";
import bent from "../car-images/bent.jpg";
import mer from "../car-images/mer.jpg";
import ran from "../car-images/ran.jpg";
import luc from "../car-images/luc.jpg";
import bmw from "../car-images/bmw.jpg";
import lex from "../car-images/lex.jpg";
import toy from "../car-images/toy.jpg";

const Luxury = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <CarCard 
        image={rolls} 
        name="Rolls-Royce Phantom" 
        description="As a brand Rolls-Royce is top of the pile, as it always has been. Even at this level there is a hierarchy though and, while any Rolls-Royce is a benchmark for luxury, some are even more imposing than others. BMW ownership has been a great boost for the brand and 7 Series foundations for the Ghost, Wraith and Dawn offer relative economies of scale. But even they have to play second fiddle to the mighty Phantom, its physical stature such that it towers over every other car on the road, SUVs included. The fact the last one we tested had a price tag of over £400,000 – a quarter of that accounted for by customisation options – which offers a sense of the league in which the Phantom operates. One of its very own, even four years on from its debut." 
        price="$400,000" 
      />
      <CarCard 
        image={bent} 
        name="Bentley Bentayga EWB" 
        description="The demise of the Mulsanne means the Flying Spur is the only saloon Bentley makes, which shows how buying habits have changed even with a brand famed for building performance four-seaters. But if the Spur is a last hurrah, it’s perfect, perhaps encapsulating what Bentley’s all about better than any of its predecessors. It can waft with the best luxury saloons, whisking you from A to B in near silence and perfect opulence, but it corners with a precision that would be alien to anyone who’s driven an old car from Crew. Bentley offers plug-in hybrid, V8 and W12 models, and they can hurl 2.5 tonnes of leather, wood and chrome towards the horizon faster than you’d ever expected. One of our few complaints is that not all of the interior feels as good as it looks." 
        price="$80,000" 
      />
      <CarCard 
        image={mer} 
        name=" Mercedes-Maybach S680 4Matic" 
        description="Every brand has a ‘ceiling’, even Mercedes-Benz. Accordingly, in the early 2000s it revived Maybach, the long-dormant German luxury brand known for its imperious limousines of the ‘20s and ‘30s. The modern Maybach launched to huge fanfare (and expense) but quickly faltered, the badge absorbed back into Mercedes and now used to distinguish ultra-luxurious concepts and special editions, including a super exclusive, GLS-based SUV. For the S-Class version, two-tone paint is a clear visual signifier while a 20cm wheelbase stretch releases even more space inside and puts the occupants behind the rear pillars for increased privacy. The 610PS (449kW) V12 engine is suitably imposing while trim, fixtures and fittings are all upgraded and the £200,000+ asking price is best considered a starting point for further indulgence." 
        price="$120,000" 
      />

      <CarCard
      image={ran}
      name="Range Rover SV"
      description="Range Rover arguably invented the concept of SUVs as luxury cars in the first place and is now watching the rest of the industry – Rolls-Royce included – belatedly wake up to the fact. No Range Rover is lacking in creature comforts but, recognising there were customers who demanded more, the Special Vehicle Operations department created the SV, with further upgrades to trim and materials and huge scope for further personalisation. Pricing is fluid when it comes to such a personal choice, but expect to be shelling out over £150,000 to cater to your individual tastes. Particularly luxurious is the SV Signature Suite spec, which is exclusive to Long Wheel Base cars and swaps the rear three-seat bench for two individual airline-style seats for the ultimate passenger experience. With a new BMW-sourced 530PS (390kW) twin-turbo V8, it’s not short on performance either, even compared to the old Range Rover SVA Dynamic."
      price="$150,000"
      />

      <CarCard
      image={luc}
      name=" Lucid Air"
      description="Electric car technology, even the playing field, opens the door for an exciting new list of car manufacturers, none more so than Lucid. You get used to reading figures in the context of EVs, which makes the Lucid Air’s numbers all the more eye-widening – this is a four-door saloon with more than 1,100PS, close to double what a BMW M5 CS offers a car many will you is the best sports saloon ever built. It handles well, too. Sure, it lacks the M5’s precision or the ruthless efficiency of a Porsche Taycan, but a car that can drift four-wheels out of corners is always a good thing in our books. Perhaps it’s no surprise the company’s Chief Technology Officer has a past life as a Lotus engineer. Luxury is what the Air’s about, though, and with a comfortable coil-sprung ride and a posh interior – with a vast glasshouse, crystal clear screens and expansive use of quality materials – it does luxury very well. Even the range will put most petrols to shame."
      price=""
      />

      <CarCard
      image={bmw}
      name="BMW i7"
      description="The BMW 7 Series is one of the longest-standing luxury car institutions going, with the new car marking the seventh generation for Bavaria’s beastly limo. Yet now it undergoes perhaps the most radical change in its history, trading a V12 for a giant battery and electric motors. Yes, the BMW i7 takes the 7 Series into the electric age. Powered by two motors producing 543PS (399kW) it should be just as potent as its 12-cylinder forebears and with a range of 300 miles, it should have no issues ferrying European members of the G7 between their summits. By and large the 7 Series has always been a bit of a looker when it comes to big luxury saloons, with a couple of hiccups. The i7, it’s fair to say, is one of them, with the weird new grille-heavy corporate schnoz and blocky rear end, there’s definitely something of the 7’s effortless style that’s missing here."
      price=""
      />

      <CarCard
      image={lex}
      name="Lexus LM"
      description="The Japanese are known for thinking outside the box, and the LM shows this extends to its luxury cars. We say car; in truth, the LM is more of a van that you can have in (hyper-luxurious) four or seven-seater configurations that both come as standard with a 48-inch TV that folds out from the headlining, comfy captain chairs with a massage function and a fridge to cool the customary champers. The interior niceties extend beyond the tech, though, because the quality of the cabin is excellent, with almost all of it draped in genuine wood trims. If there was any doubt, the LM isn’t designed to be fun to drive but is very comfortable. The hybrid engine is almost silent in electric mode, the suspension is very soft, and the brakes are specifically designed to bring the car to a smooth stop."
      price=""
      />

      <CarCard
      image={toy}
      name="Toyota Century"
      description="Lexus may be Toyota’s premium brand but its most luxurious car carries its own name. Launched in 1967 to celebrate the 100th anniversary of founder Sakichi Toyoda’s birth, the original Century lasted three decades before its replacement in 1997 with an all-new, V12-powered version. Two decades on a new Century has now launched, V8 hybrid powered and priced at Mercedes-Maybach levels. Favoured by royalty, politicians, business leaders and Yakuza alike, the Century combines a Japanese sense of modesty with obsessional engineering and hand-finished craftsmanship, up to and including paint polished to a degree you can discreetly check your reflection in it without appearing vain. Suffice to say, if you see a black Century gliding by the occupant is a boss of some kind, the combination of exclusivity (Toyota builds just 600 a year) and a humble badge adding to the Century’s mystique."
      price=""
      />
      

    </div>
  );
};

export default Luxury;