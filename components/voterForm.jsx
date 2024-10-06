import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";

const VoterFormComponent = () => {
  const router = useRouter();
  const [voterDetails, setVoterDetails] = React.useState({
    name: "",
    mobile: "",
    voterId: "",
    village: "",
    mandal: "",
    district: "",
    state: "",
  });

  const handleFarmerDetailsInputChange = (e) => {
    const { name, value } = e.target;
    setVoterDetails({
      ...voterDetails,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      let formData = {
        voterName: voterDetails.name,
        mobile: voterDetails.mobile,
        voterId: voterDetails.voterId,
        village: voterDetails.village,
        mandal: voterDetails.mandal,
        district: voterDetails.district,
        state: voterDetails.state,
      };

      let uri = `/api/voter`;

      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        const result = await Swal.fire({
          title: "Voter added successfully",
          icon: "success",
          confirmButtonColor: "#3085fe",
          confirmButtonText: "Ok",
          allowOutsideClick: false, 
          allowEscapeKey: false, 
          allowEnterKey: false,
        });
        if (result.isConfirmed) {
          router.push("/ui/candidates/" + data.voterId);
        }
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <main>
      <div className="flex flex-row border sticky  bg-[#f0f3f4] z-20 border-gray-200 items-center">
        <div className="content ms-3 flex justify-between w-full items-center">
          <div className="data p-2 py-4">
            <div className="title">
              <h4 className="text-stone-900 text-3xl font-black">
                Voter Details
              </h4>{" "}
            </div>
            <label className="text-slate-500 text-sm font-bold">
              Please fill details below
            </label>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-4 grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 mb-10">
        <div className="field bg-white py-3 md:mt-5">
          <label
            htmlFor="name"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            Voter Name
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Voter Name"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.name}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="mobile"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            Mobile Number
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="mobile"
              name="mobile"
              type="text"
              placeholder="Enter Mobile Number"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.mobile}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="voterId"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            Voter ID
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="voterId"
              name="voterId"
              type="text"
              placeholder="Enter Voter ID"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.voterId}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="village"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            Village
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="village"
              name="village"
              type="text"
              placeholder="Enter Village"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.village}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="mandal"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            Mandal
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="mandal"
              name="mandal"
              type="text"
              placeholder="Enter Mandal"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.mandal}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="district"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            District
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="district"
              name="district"
              type="text"
              placeholder="Enter District"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.district}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>

        <div className="field bg-white py-3">
          <label
            htmlFor="state"
            className="text-slate-500 text-sm font-bold ml-3.5 px-1 block"
          >
            State
          </label>
          <div className="control border-b-2 border-gray-200 flex items-center">
            <div className="bg-[#0084ff] mr-1.5 w-2 h-2 rounded-full"></div>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="Enter State"
              className="bg-transparent text-left flex-grow text-gray-800 text-lg w-full px-1 py-1 border-none placeholder:text-gray-400 focus:outline-none"
              value={voterDetails.state}
              onChange={handleFarmerDetailsInputChange}
            />
          </div>
        </div>
      </div>
      <div
        className=" fixed bottom-0 inset-x-0 p-4 flex items-center justify-center bg-[#0084ff]"
        onClick={handleSave}
      >
        <p className=" text-white">SAVE</p>
      </div>
    </main>
  );
};

export default VoterFormComponent;
