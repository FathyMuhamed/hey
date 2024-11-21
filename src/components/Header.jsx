import { motion } from "framer-motion";
import ExperienceEntry from "./ExperienceEntry";
import Github from "./Github";

export default function Header() {
  return (
    <div className="relative">
      <div className="relative max-w-6xl mx-auto px-6 ">
        <img src="https://placehold.co/60" alt="me" className="rounded-full" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <span className="font-medium text-sm  py-2">
            <span className="text-[#216E39] text-lg">Hi, I am Fathi.</span>I am
            a Frontend Engineer and creative build web app.
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm text-neutral-500 max-w-2xl  leading-relaxed"
        >
          CURRENTLY
        </motion.p>
        <ExperienceEntry
          position="Frontend Engineer"
          year={
            <span>
              2023 - <span className="text-[#216E39] ">Present</span>
            </span>
          }
          image="https://placehold.co/20"
          company="Own"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm text-neutral-500 max-w-2xl  leading-relaxed"
        >
          Previous roles
        </motion.p>
        {[
          {
            position: "Frontend Engineer",
            year: "2022 - 2023 (Full-time)",
            image: "https://placehold.co/20",
            company: "Dexi",
          },
          {
            position: "Frontend Engineer",
            year: "2023 - 2023 (Part-time)",
            image: "https://placehold.co/20",
            company: "Telefreik",
          },
          {
            position: "Frontend Engineer",
            year: "2022 - 2022 (Internship)",
            image: "https://placehold.co/20",
            company: "Chingu",
          },
        ].map((role) => (
          <ExperienceEntry
            key={role.company}
            position={role.position}
            year={role.year}
            image={role.image}
            company={role.company}
          />
        ))}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm text-neutral-500 max-w-2xl  leading-relaxed"
        >
          ABOUT
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-xs text-black max-w-2xl  leading-relaxed"
        >
          Creative Front-end Engineer obsessed with designing and building
          exceptional, Develop things and seeing them grow up, Focusing on
          quality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-90"
        >
          <Github />
        </motion.div>
      </div>
    </div>
  );
}