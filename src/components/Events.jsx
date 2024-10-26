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
import devfest from "../assets/Events/devfest.png";
import stealthCraft from "../assets/Events/stealthcraft.svg";
import sih from "../assets/Events/sih.webp";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const EventCard = ({ src, title, description }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="relative lg:mx-5 my-5 rounded-lg shadow-lg border border-[#2A0E61] hover:translate-y-[-5px] transition-transform ease-linea duration-300r ">
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
    </Tilt>
  );
};

export default Event;

export const Events = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-4xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Events and Conferences
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="h-full max-w-lg md:max-w-xl lg:max-w-7xl gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  md:px-10"
      >
        <EventCard
          src={devfest}
          title="DevFest Chennai"
          description="Chennai • Oct 5, 2024 | DevFest is a community-led, developer event hosted by GDG Chennai."
        />
        <EventCard
          src={sih}
          title="Smart India Hackathon"
          description="Chennai • Sep 25, 2024 | Participated in the Internal Smart India Hackathon and got shortlisted among 120+ teams"
        />
        <EventCard
          src={stealthCraft}
          title="Stealth Craft"
          description="Chennai • Sep 12, 2024 | Hosted a cybersecurity workshop for students interested in cybersecurity"
        />
        <EventCard
          src={hth}
          title="Hack The Horizon"
          description="Chennai • Aug 5, 2024 | 24 hour hackathon at VIT Chennai. Got an invite from the panel judge to discuss the project further"
        />
        <EventCard
          src={interfaceoff}
          title="Interface-off"
          description="Chennai • Mar 8, 2024 | Participated in a UI/UX design competition at SNU Chennai I was given a on spot topic to desgin"
        />
        <EventCard
          src={summit}
          title="GDSC Summit Up"
          description="Chennai • Mar 2, 2024 | Hosted a panel discussion on Navigating the Startup Journey as a key part of the GDSC Chennai Summit up"
        />
        <EventCard
          src={nexus}
          title="React Nexus"
          description="Bangalore • Jul 7, 2023 | Attended React Nexus, a 2-day conference fully packed with excellent talks and panel discussions by industry leaders and experts on topics related to React and React Native development."
        />
        <EventCard
          src={jsConf}
          title="JSConf India"
          description="Bangalore • Jun 2, 2023 | Attended JS Conference, which is a series of conferences focused on JavaScript and its ecosystem. It is a global event that happens in multiple countries around the world."
        />
        <EventCard
          src={gdscwow}
          title="GDSC Wow"
          description="Chennai • April 8, 2023 | Attendee at GDSC Wow, which is an annual event organized by Google Developer Student Clubs (GDSC) to celebrate and showcase the impact of student-led tech communities."
        />
        <EventCard
          src={codechef}
          title="CodeChef Contest"
          description="Online • September 2023 | Particpated in CodeChef's DSA Challenge"
        />
        <EventCard
          src={codeathon}
          title="Codeathon"
          description="Online • October 2023 | Participated in a 2 hour coding competition by TechPro"
        />
        <EventCard
          src={hackerrank}
          title="HackerRank Challenge"
          description="Online • October 2023 | Participated in HackerRank's coding contests"
        />
      </motion.div>
    </div>
  );
};
