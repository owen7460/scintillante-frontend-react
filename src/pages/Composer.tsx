import { useParams } from "react-router-dom";
import getWorks from "../apis/getWorks";
import { useState, useEffect } from "react";
function Composer() {
  const { id } = useParams();
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data = await getWorks(Number(id));
        setWorks(data.works);
        console.log(data);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };
    fetchWorks();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <h1 className="text-6xl font-thin">Composer</h1>
      <p className="text-lg font-thin">{id}</p>
      {works.map((work) => (
        <div key={work.id}>
          <p className="text-lg font-thin">{work.title}</p>
          <p className="text-lg font-thin">{work.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default Composer;
