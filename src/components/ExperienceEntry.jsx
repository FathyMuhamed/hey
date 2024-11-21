import { motion } from "framer-motion";

const ExperienceEntry = ({ position, year, image, company }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-4  text-black-500 max-w-2xl leading-relaxed flex items-center justify-between"
    >
      <div className="flex flex-col">
        <span className="text-sm">{position}</span>
        <span className="text-neutral-500 text-xs">{year}</span>
      </div>
      <div className="flex flex-row gap-2 items-center w-16">
        <img
          src={image}
          alt={company || "https://placehold.co/20"}
          className="rounded-full"
        />
        <span className="text-neutral-500 text-xs">{company}</span>
      </div>
    </motion.div>
  );
};

export default ExperienceEntry;
