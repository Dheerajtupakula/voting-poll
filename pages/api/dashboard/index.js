let votingPoll = [
  { partyId: 2, id: 2, partyName: "Progressive Party", votes: [] },
  { partyId: 3, id: 3, partyName: "Unity Front", votes: [] },
  { partyId: 4, id: 4, partyName: "People's Voice", votes: [] },
  { partyId: 5, id: 5, partyName: "Future Movement", votes: [] },
  { partyId: 6, id: 6, partyName: "Democratic Alliance", votes: [] },
  { partyId: 7, id: 7, partyName: "National Congress", votes: [] },
  { partyId: 8, id: 8, partyName: "Freedom Party", votes: [] },
  { partyId: 9, id: 9, partyName: "Justice Party", votes: [] },
  { partyId: 10, id: 10, partyName: "Reform League", votes: [] },
  { id: 11, partyId: 11, partyName: "People's Progress", votes: [] },
  { partyId: 1, id: 1, partyName: "Chair", votes: [] },
  { id: 12, partyId: 12, partyName: "Labor Union", votes: [] },
  { id: 13, partyId: 13, partyName: "Green Party", votes: [] },
  { id: 14, partyId: 14, partyName: "Citizen's Choice", votes: [] },
  { id: 15, partyId: 15, partyName: "Workers United", votes: [] },
  { id: 16, partyId: 16, partyName: "New Hope Party", votes: [] },
  { id: 17, partyId: 17, partyName: "Progress Alliance", votes: [] },
  { id: 18, partyId: 18, partyName: "Unity League", votes: [] },
  { id: 19, partyId: 19, partyName: "Common Man Party", votes: [] },
  { id: 20, partyId: 20, partyName: "National Reform", votes: [] },
];

export default async function handler(req, res) {
  const { voterId } = req.query;

  switch (req.method) {
    case "GET":
      try {
        res.status(200).json({
          success: true,
          message: "Voting Poll Data",
          data: votingPoll,
        });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    case "POST":
      try {
        let reqBody = req.body;
        const { partyId } = reqBody;

        const party = votingPoll.find((p) => p.partyId === partyId);

        if (!party) {
          return res.status(404).json({
            success: false,
            message: "Party not found",
          });
        }

        const existingVote = party.votes.find(
          (vote) => vote.voterId === voterId
        );

        if (existingVote) {
          return res.status(400).json({
            success: false,
            message: "Voter has already voted for this party!",
          });
        }

        party.votes.push({
          voterId: voterId, 
          voteTime: new Date(),
        });

        res.status(201).json({
          success: true,
          message: `Voted successfully for ${party.partyName}`,
          votingPoll, 
        });
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}

