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
      <h1>Scintillante</h1>
      <p>
        Scintillante is a relaxing and claming site to share French
        Impressionist Music.
      </p>
      <div id="composers">
        <h2>Composers</h2>
        {composers.map((composer) => {
          return (
            <div key={composer.id}>
              <h3 onClick={() => handleComposerClick(composer.id)}>
                {composer.name}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
