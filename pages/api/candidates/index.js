const candidates = [
  { id: 2, name: "Anjali Sharma", partyName: "Progressive Party" },
  { id: 3, name: "Arjun Deshmukh", partyName: "Unity Front" },
  { id: 4, name: "Meera Patel", partyName: "People's Voice" },
  { id: 5, name: "Rahul Nair", partyName: "Future Movement" },
  { id: 6, name: "Sita Rao", partyName: "Democratic Alliance" },
  { id: 7, name: "Kiran Mehta", partyName: "National Congress" },
  { id: 8, name: "Vikram Singh", partyName: "Freedom Party" },
  { id: 9, name: "Lakshmi Iyer", partyName: "Justice Party" },
  { id: 10, name: "Manoj Kumar", partyName: "Reform League" },
  { id: 11, name: "Nisha Gupta", partyName: "People's Progress" },
  { id: 12, name: "Amitabh Khanna", partyName: "Labor Union" },
  { id: 1, name: "Ravi Varma", partyName: "Chair" },
  { id: 13, name: "Sanjay Kapoor", partyName: "Green Party" },
  { id: 14, name: "Priya Menon", partyName: "Citizen's Choice" },
  { id: 15, name: "Devika Pillai", partyName: "Workers United" },
  { id: 16, name: "Suresh Joshi", partyName: "New Hope Party" },
  { id: 17, name: "Geeta Sen", partyName: "Progress Alliance" },
  { id: 18, name: "Rohit Verma", partyName: "Unity League" },
  { id: 19, name: "Preeti Sinha", partyName: "Common Man Party" },
  { id: 20, name: "Rajesh Reddy", partyName: "National Reform" },
];

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        res.status(200).json({
          success: true,
          message: "Candidates Data",
          data: candidates,
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
