import { useParams } from "react-router-dom";

function Composer() {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <h1 className="text-6xl font-thin">Composer</h1>
      <p className="text-lg font-thin">{id}</p>
    </div>
  );
}

export default Composer;
