import { useEffect, useState } from "react";
import { getComposers } from "./apis/getComposers";

function App() {
  const [composers, setComposers] = useState([]);

  useEffect(() => {
    const fetchComposers = async () => {
      try {
        const data = await getComposers();
        console.log(data);
        setComposers(data);
      } catch (error) {
        console.error("Error fetching composers:", error);
      }
    };
    fetchComposers();
  }, []);

  const handleComposerClick = (composerId: number) => {
    console.log(composerId);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
        <h1 className="text-6xl font-thin">Scintillante</h1>
        <p className="text-lg font-thin">
          Scintillante is a relaxing and claming site to share French
          Impressionist Music.
        </p>
        <div
          id="composers"
          className="flex flex-col items-center justify-center gap-4"
        >
          <h2 className="text-2xl font-thin">Composers</h2>
          {composers.map((composer) => {
            return (
              <div
                key={composer.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                <h3
                  onClick={() => handleComposerClick(composer.id)}
                  className="text-xl font-thin"
                >
                  {composer.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
