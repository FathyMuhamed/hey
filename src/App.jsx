import { useState } from "react";
import DynamicIsland from "./components/DynamicIsland";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMockSearch } from "./hooks/useMockSearch";
import CommandMenu from "./components/Command";

function App() {
  const [islandState, setIslandState] = useState("nav");
  const { searchQuery, searchResults, handleSearch, setSearchQuery } =
    useMockSearch();

  return (
    <div className="h-screen relative overflow-hidden flex flex-col">
      <DynamicIsland
        islandState={islandState}
        setIslandState={setIslandState}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        progress={0}
        handleSearch={handleSearch}
      />

      <main className="flex-1 flex items-center justify-center relative">
        <div className="flex flex-col items-center">
          <Header />
          <CommandMenu />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
