import React from "react";
import CarCard from "./CarCard";

import ran1 from "../car-images/ran1.jpg";
import suz2 from "../car-images/suz2.jpg";
import ine3 from "../car-images/ine3.jpg";
import jee4 from "../car-images/jee4.jpg";
import mer5 from "../car-images/mer5.jpg";
import dac6 from "../car-images/dac6.jpg";
import toy7 from "../car-images/toy7.jpg";
import land8 from "../car-images/land8.jpg";

const Offroad = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
      <CarCard
      image={ran1}
      name="Range Rover"
      description="While it might look flashier than ever, no one can question the Range Rover's go-anywhere credentials, and you don't need to be a professional offroad instructor to access them. The Range Rover’s Terrain Response system makes it easy to set up the car's four-wheel drive, air suspension, traction control and locking differentials to handle a variety of circumstances. The latest model's rear-wheel steer means it's even manoeuvrable. In its highest suspension setting, the Range Rover has a 295mm ground clearance (4mm higher than the Land Rover Defender) and can wade depths up to 900mm."
      price="100,000"
      />

       <CarCard
      image={suz2}
      name="Suzuki Jimny"
      description="One of the cheapest offroaders on sale in the UK is also one of the toughest, although UK legislation means you can only buy the Suzuki Jimny as a two-seater van. Nonetheless, with proper four-wheel drive, a low-range gearbox and a wheel-at-each-corner design (which gives it an excellent break-over angle), the Jimny can handle whatever terrain you put in front of it just as well as the more illustrious machines on this list – sometimes even better thanks to its compact shape and relative light weight

      The Suzuki could better blend its offroad excellence with decent road manners, though. On the Tarmac, the Jimny feels slow and precarious; it probably won't topple over in fast corners, but there's always the feeling at the back of your mind that it just might. Even upright, it weaves on the motorway and produces engine, road, and wind roar that will send you loopy over long distances."
      price=""
      />

       <CarCard
      image={ine3}
      name="Ineos Grenadier"
      description="The Ineos Grenadier is designed for people who would like to jump in a time machine back to 2012 when the old Land Rover Defender was still on sale – unapologetically, it's an old-school offroader designed to keep you moving whatever mother nature hurls in your direction. As a result, it has a list of offroad goodies as long as your arm, and a choice of BMW six-cylinder petrol and diesel engines that deliver boxing-glove loads of punch.

      But the Grenadier is not for offroading amateurs; it has an array of toggle switches that will keep a jumbo jet pilot on their toes and a similar matter-of-fact finish to what you’ll find on a commercial jet’s flight deck. There’s also a sense of Boeing build quality to some of the interior trims. Alas, Ineos has sacrificed road manners for offroad ability, meaning the Grenadier's controls feel vague and chip away at your confidence to press on when you’re on Tarmac."
      price=""
      />

       <CarCard
      image={jee4}
      name="Jeep Wrangler"
      description="We might like to think Land Rover was the first company to build a go-anywhere offroader but we’d be wrong, Jeep beat us to the punch building the Willys Jeep that kept American infantry moving as they swept across occupied Europe in WW2.

      Much has changed about the Jeep since then, it’s bigger, more powerful, and potentially even more capable offroad, but much of the basic charm of the old car remains – even now, you can remove the roof and doors for the full back-to-nature feel (although doing so is illegal in the UK and not best advised, sigh). Still, even with its bodywork intact, the Jeep’s clever four-wheel drive, low range gears, and disconnecting roll bars mean not much will stop it. You can even have it as a city-centre-friendly hybrid."
      price=""
      />

       <CarCard
      image={mer5}
      name="Mercedes G-Class"
      description="The Mercedes G-Class was originally a military vehicle tasked with keeping the German army ahead of the action, although you'd never know it from the super luxurious driving seat of the current model. Mercedes made a significant effort with the new G Wagen so that even the doors closed with the same reassuring thud as the old models’ openings. And while the interior is kitted out with all the tech you could dream of, you still get the same angular design and upright windscreen that’s famed for catching stone chips.

      As you'd expect, the G-Class is one tough mother in the rough stuff, thanks to its towering ground clearance, locking differentials, and rigid ladder chassis. But it's no slouch on the road, especially if you go for the crazy AMG model, which can give sportscars a run for their money (at least in a straight line), although you’ll need a private oil field to keep it fuelled."
      price=""
      />

       <CarCard
      image={dac6}
      name="Dacia Duster"
      description="We've yet to try a four-wheel-drive version of the new Dacia Duster, but the company says it will be the most capable offroader in the ‘non-expert’ market (for cars without a low-range gearbox), and based on past experience we have no reason to doubt that. The new vehicle can wade up to 217mm deep and has four-wheel drive with modes for Snow, Mud, and Sand. Plus, you can tackle the countryside with gusto safe in the knowledge that a damaged Duster is much cheaper to fix than a Range Rover.

      Being smaller and more road-biased than most of the cars here means the Duster can get away with having a 1.2-litre petrol engine that drinks fuel like a house mouse drinks water while still being relatively nippy. Sharp paint jobs mean that, while cheap, the Duster is eminently cheerful and equipped with all the basics a modern driver needs."
      price=""
      />

       <CarCard
      image={toy7}
      name="Toyota Land Cruiser"
      description="The Toyota Land Cruiser is a desirable offroader for many reasons: its locking differentials, disconnecting anti-roll bars, towering height, and sophisticated four-wheel – but one of its main selling points is its mechanical durability. While other manufacturers fill their engine bays with plastic that gets brittle and fails over time, the Land Cruiser, like every Toyota, is built to last. Which is why the old Australian saying goes: you drive a Land Rover if you want to get into the Outback and a Land Cruiser if you want to get back out again.

      So, the Toyota has always been a reliable workhorse. The difference is that the new one is also a desirable status symbol with looks that hark back to the original 40-series from the 1960s. The drive is thoroughly up to date, though, and while the Land Cruiser is no nimble sports car, it's easy to drive on tight roads, well-behaved in corners, and quiet and refined on the motorway."
      price=""
      />

       <CarCard
      image={land8}
      name="Land Rover Defender"
      description="There's a Defender to suit most people (if not their wallets), with sizes ranging from small (90), medium (110) and large (130) and seating for up to eight people. There are also petrol, diesel, and hybrid engines.

      Whichever variant you go for, you'll get a car that's incredibly capable offroad with a Terrain Response system that makes it easy to master the Defender's long list of offroad gizmos. It's a stark contrast to the complicated design of the Ineos Grenadier. The Defender also wins points for being an excellent road car that cruises quietly and tracks arrow straight. While it might not have the old Defender's character, the new model is better in every measurable way."
      price=""
      />
    </div>
  );
};

export default Offroad; // ✅ default export