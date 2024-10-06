import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CandidatesPage = () => {
  const router = useRouter();
  const params = useParams();
  const [candidates, setCandidates] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  const fetchCandidates = async () => {
    try {
      let uri = `/api/candidates`;

      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        setCandidates(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleVote = async () => {
    try {
      let uri = `/api/dashboard?voterId=${params?.candidates}`;

      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partyId: selectedId }),
      });

      const data = await response.json();

      if (data.success) {
        const result = await Swal.fire({
          title: "Voted successfully",
          icon: "success",
          confirmButtonColor: "#3085fe",
          confirmButtonText: "Ok",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
        if (result.isConfirmed) {
          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);
  return (
    <main>
      <div className="flex flex-row border sticky  bg-[#f0f3f4] z-20 border-gray-200 items-center">
        <div className="content ms-3 flex justify-between w-full items-center">
          <div className="data p-2 py-4">
            <div className="title">
              <h4 className="text-stone-900 text-3xl font-black">
                Candidates Details
              </h4>{" "}
            </div>
            <label className="text-slate-500 text-sm font-bold">
              Please Select a candidate
            </label>
          </div>
        </div>
      </div>
      {candidates.length > 0 && (
        <div className="bg-slate-100 p-3 grid grid-cols-2 gap-2 w-full justify-center items-center">
          {candidates.map((item) => (
            <div
              key={item.id}
              className={`p-2 w-full shadow rounded-xl ${
                item.id === selectedId && "border-2 border-orange-700"
              }`}
              onClick={() => handleSelect(item.id)}
            >
              <span className=" h-32 flex justify-center bg-slate-200 text-xl  rounded-lg items-center p-3">
                {item.partyName}
              </span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
      {selectedId && (
        <div
          className="fixed bottom-0 inset-x-0 flex justify-center items-center bg-[#0084ff] p-4"
          onClick={handleVote}
        >
          <p className="text-lg text-white">Submit</p>
        </div>
      )}
    </main>
  );
};

export default CandidatesPage;
