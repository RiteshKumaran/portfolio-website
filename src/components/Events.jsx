import React from "react";
import hth from "../assets/Events/hth.jpeg";
import interfaceoff from "../assets/Events/interface-off.png";
import summit from "../assets/Events/summit.jpg";
import nexus from "../assets/Events/react-nexus.png";
import jsConf from "../assets/Events/jsconf.png";
import gdscwow from "../assets/Events/gdsc-wow.png";
import codechef from "../assets/Events/codechef.jpeg";
import codeathon from "../assets/Events/codeathon.jpeg";
import hackerrank from "../assets/Events/hackerrank.png";
import { motion } from "framer-motion";

const EventCard = ({ src, title, description }) => {
  return (
    <div className="relative rounded-lg shadow-lg border border-[#2A0E61] hover:translate-y-[-5px] transition-transform ease-linea duration-300r ">
      <img
        src={src}
        alt={title}
        width={100}
        height={500}
        className="w-full h-80  object-center bg-auto rounded-t-lg"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Event;

export const Events = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Events & Conferences
      </h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="h-full max-w-lg md:max-w-xl lg:max-w-7xl gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-5 md:px-20"
      >
        <EventCard
          src={hth}
          title="Hack The Horizon"
          description="Chennai • Aug 5, 2024 | 24 hour hackathon at VIT Chennai"
        />
        <EventCard
          src={interfaceoff}
          title="Interface-off"
          description="Chennai • Mar 8, 2024 | Design Hackathon at SNU Chennai"
        />
        <EventCard
          src={summit}
          title="GDSC Chennai Summit Up"
          description="Chennai • Mar 2, 2024 | Hosted a panel discussion on Navigating the Startup Journey as a key part of the GDSC Chennai Summit up"
        />
        <EventCard
          src={nexus}
          title="React Nexus"
          description="Bangalore • Jul 7, 2023 | Attended React Nexus, which is a 2-day conference fully packed with excellent talks and panel discussions on topics related to React and React Native."
        />
        <EventCard
          src={jsConf}
          title="JSConf India"
          description="Bangalore • Jun 2, 2023 | Attended JS Conference, which is a series of conferences focused on JavaScript and its ecosystem."
        />
        <EventCard
          src={gdscwow}
          title="GDSC Wow"
          description="Chennai • April 8, 2023 | Attendee at GDSC Wow, which is an annual event organized by Google Developer Student Clubs (GDSC) to celebrate and showcase the impact and achievements of student-led tech communities."
        />
        <EventCard
          src={codechef}
          title="CodeChef Contest"
          description="Online • September 2023 | Particpated in CodeChef's DSA Challenge"
        />
        <EventCard
          src={codeathon}
          title="Codeathon"
          description="SRM, Chennai • October 2023 | Participated in a 2 hour coding competition by TechPro Club"
        />
        <EventCard
          src={hackerrank}
          title="HackerRank Challenge"
          description="Online • October 2023 | Actively participated in HackerRank's coding challenge"
        />
      </motion.div>
    </div>
  );
};
