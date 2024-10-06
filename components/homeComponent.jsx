import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const HomeComponent = () => {
  const [votingData, setVotingData] = useState([]);
  const router = useRouter();

  const fetchCandidates = async () => {
    try {
      let uri = `/api/dashboard`;

      const response = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        setVotingData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleVote = () => {
    router.push("/ui/voter/voterForm");
  };
  const maxVotes =
    Math.max(...votingData.map((item) => item.votes.length)) || 1;
  return (
    <main>
      <div className="flex flex-row border sticky top-0 bg-[#f0f3f4] z-20 border-gray-200 items-center">
        <div className="content ms-3 flex justify-between w-full items-center">
          <div className="data p-2 py-4">
            <div className="title">
              <h4 className="text-stone-900 text-3xl text-center font-black">
                Voting Details
              </h4>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-4">Voting Results</h2>
        <div className="flex flex-col min-h-96  space-y-4 w-full">
          {votingData.map((item, index) => {
            const barWidth =
              item.votes.length > 0 ? (item.votes.length / maxVotes) * 100 : 1;

            const colors = [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#66BB6A",
              "#FF7043",
              "#AB47BC",
              "#29B6F6",
            ];

            const barColor =
              item.votes.length > 0 ? colors[index % colors.length] : "#d3d3d3";

            return (
              <div key={item.partyId} className="flex items-center w-full">
                <p className="w-32 text-left">
                  {item.partyName}{" "}
                  <span className="text-nowrap">
                    ({item.votes.length} votes)
                  </span>
                </p>

                <div className="bg-slate-100 rounded-lg w-full">
                  <div
                    className="h-8 bg-blue-500 rounded-lg transition-all duration-300 ease-in-out"
                    style={{
                      width: `${barWidth}%`,
                      backgroundColor: barColor,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="fixed bottom-5 right-5 px-5 py-3 rounded-lg bg-[#0084ff]"
        onClick={handleVote}
      >
        <p className="text-white">Vote Now</p>
      </div>
    </main>
  );
};

export default HomeComponent;
