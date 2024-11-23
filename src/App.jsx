import { useEffect, useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMockSearch } from "./hooks/useMockSearch";
import { useProgress } from "./hooks/useProgress";
import CommandMenu from "./components/Command";

function App() {
  const [islandState, setIslandState] = useState("nav");
  const { searchQuery, searchResults, handleSearch, setSearchQuery } =
    useMockSearch();
  const { progress, handleProgress } = useProgress({
    islandState,
    setIslandState,
  });

  useEffect(() => {
    let id;
    if (progress === 100 && islandState === "complete") {
      id = setTimeout(() => setIslandState("nav"), 400);
    }
    return () => clearTimeout(id);
  }, [progress, islandState]);

  return (
    <div className="h-screen relative overflow-hidden flex flex-col">
      <DynamicIsland
        islandState={islandState}
        setIslandState={setIslandState}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        progress={progress}
        handleSearch={handleSearch}
      />

      <main className="flex-1 flex items-center justify-center relative">
        <div className="flex flex-col items-center">
          <Header />
          <CommandMenu
            setIslandState={setIslandState}
            onBarUpdate={() => {
              handleProgress();
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
