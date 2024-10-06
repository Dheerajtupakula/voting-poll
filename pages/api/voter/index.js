export const voterData = [];
let currentId = 1;
export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        let reqBody = req.body;
        const newVoter = {
          id: currentId++, 
          ...reqBody, 
        };
        voterData.push(newVoter);

        res.status(201).json({
          success: true,
          message: "Voter Created Successfully",
          voterId: currentId,
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
