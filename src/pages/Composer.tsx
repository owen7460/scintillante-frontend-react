import { useParams, useSearchParams } from "react-router-dom";
import getWorks from "../apis/getWorks";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Composer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || 1);
  const pageSize = Number(searchParams.get("pageSize") || 2);

  const [works, setWorks] = useState([]);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(Number(total) / Number(pageSize));
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const data = await getWorks(Number(id), Number(page), Number(pageSize));
        setWorks(data.works);
        setTotal(data.total);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };
    fetchWorks();
  }, [id, page, pageSize]);

  const handleHomepageClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
      <h1 className="text-6xl font-thin">Works</h1>
      {works.map((work) => (
        <div key={work.id}>
          <p className="text-lg font-thin">
            {work.title} - {work.genre}
          </p>
        </div>
      ))}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              onClick={() =>
                setSearchParams({
                  page: String(pageNumber),
                  pageSize: String(pageSize),
                })
              }
              className={`px-3 py-1 border cursor-pointer ${
                Number(page) === pageNumber ? "bg-black text-white" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => handleHomepageClick()}
        className="px-3 py-1 border cursor-pointer font-thin"
      >
        Homepage
      </button>
    </div>
  );
}

export default Composer;
