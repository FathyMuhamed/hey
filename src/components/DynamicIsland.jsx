import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiCheck } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import Time from "./Time";
import { RiProgress5Line } from "react-icons/ri";

export default function DynamicIsland({
  setOpen,
  islandState,
  setIslandState,
  searchQuery,
  setSearchQuery,
  searchResults,
  progress,
  handleSearch,
}) {
  return (
    <motion.div
      className="fixed top-3 left-1/2 -translate-x-1/2 bg-white backdrop-blur-xl rounded-[24px] z-50 border border-neutral-800"
      animate={{
        width:
          islandState === "search"
            ? "400px"
            : islandState === "nav"
            ? "180px"
            : "340px",
        height: islandState === "nav" ? "32px" : "44px",
      }}
      transition={{ type: "spring", damping: 40, stiffness: 400 }}
    >
      <Time style={islandState !== "nav" ? "top-2.5" : "top-1"} />
      <a
        href="mailto:fathyymuhamed@gmail.com"
        className={`text-white/70 hover:text-white transition-colors
        absolute ${
          islandState !== "nav" ? "top-2.5" : "top-1"
        } -right-8 sm:-right-12 -translate-x-1/2  backdrop-blur-xl z-50
        `}
      >
        <IoMailUnreadOutline className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </a>
      <AnimatePresence mode="wait">
        {islandState === "nav" && <NavState setOpen={setOpen} />}

        {islandState === "search" && (
          <SearchState
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            setIslandState={setIslandState}
            setSearchQuery={setSearchQuery}
            searchResults={searchResults}
          />
        )}

        {islandState === "progress" && <DownloadingState progress={progress} />}

        {islandState === "complete" && (
          <CompleteState setIslandState={setIslandState} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Sub-components
function NavState({ setOpen }) {
  return (
    <motion.div
      key="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-between h-full px-4"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#216E39]" />
      <div className="flex items-center gap-2 ">
        <button
          className="flex items-center gap-1 text-gray-600 hover:text-black transition-colors hover:bg-slate-100 hover:rounded-lg px-2 py-1"
          onClick={() => setOpen(true)}
        >
          <span className="text-xs ">⌘</span>
          <span className="text-xs ">+</span>
          <span className="text-xs ">K</span>
        </button>
      </div>
    </motion.div>
  );
}

function SearchState({
  searchQuery,
  handleSearch,
  setIslandState,
  setSearchQuery,
  searchResults,
}) {
  return (
    <motion.div
      key="search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full"
    >
      <div className="flex items-center h-full px-5 gap-3">
        <FiSearch className="w-4 h-4 text-black/50" />
        <input
          type="text"
          placeholder="Search report..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm text-black placeholder-white/50 outline-none"
          autoFocus
        />
        <button
          onClick={() => {
            setIslandState("nav");
            setSearchQuery("");
          }}
          className="text-black/50 hover:text-bleck transition-colors"
        >
          <FiX className="w-4 h-4 text-black" />
        </button>
      </div>

      {searchQuery.length > 0 && (
        <SearchResults
          searchResults={searchResults}
          setIslandState={setIslandState}
          setSearchQuery={setSearchQuery}
        />
      )}
    </motion.div>
  );
}

function SearchResults({ searchResults, setIslandState, setSearchQuery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute top-full left-0 right-0 mt-2 bg-white text-black backdrop-blur-sm rounded-lg border border-neutral-800 overflow-hidden shadow-xl"
    >
      {searchResults.length > 0 ? (
        <div className="py-2">
          {searchResults.map((result, index) => (
            <SearchResultItem
              key={index}
              result={result}
              setIslandState={setIslandState}
              setSearchQuery={setSearchQuery}
            />
          ))}
        </div>
      ) : (
        <div className="px-4 py-3 text-sm text-black/40">No results found</div>
      )}
    </motion.div>
  );
}

function SearchResultItem({ result, setIslandState, setSearchQuery }) {
  return (
    <button
      onClick={() => {
        setIslandState("nav");
        setSearchQuery("");
      }}
      className="w-full px-4 py-2.5 text-left hover:bg-white/5 transition-colors flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm text-black">{result.title}</span>
        <span className="text-xs text-black/40 px-2 py-0.5 rounded-full bg-black/5">
          {result.type}
        </span>
      </div>
      <span className="text-xs text-black/40 group-hover:text-[#216E39] transition-colors">
        Page {result.page}
      </span>
    </button>
  );
}

function DownloadingState({ progress }) {
  return (
    <motion.div
      key="downloading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-between h-full px-5"
    >
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-5 rounded-full bg-[#216E39]/10 flex items-center justify-center"
        >
          <RiProgress5Line className="w-2.5 h-2.5 text-[#216E39]" />
        </motion.div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-[#216E39]">{progress}%</span>
        <motion.div className="w-12 h-0.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#216E39]"
            animate={{ width: `${progress}%` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CompleteState({ setIslandState }) {
  return (
    <motion.div
      key="complete"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-between h-full px-5 cursor-pointer"
      onClick={() => setIslandState("nav")}
    >
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-[#32D74B]/10 flex items-center justify-center">
          <FiCheck className="w-2.5 h-2.5 text-[#32D74B]" />
        </div>
        <span className="text-xs font-medium text-[#32D74B]/90">
          success!!!
        </span>
      </div>
    </motion.div>
  );
}
