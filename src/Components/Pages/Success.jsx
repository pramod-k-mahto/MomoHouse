import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams();
  const [newData, setNewData] = useState(null); // Initialize as null
  const data = searchParams.get("data"); // Extract the query parameter

  useEffect(() => {
    const getData = () => {
      try {
        const decodedData = atob(data); // Decode the base64 string
        const parseData = JSON.parse(decodedData); // Parse the JSON string
        setNewData(parseData); // Update state with parsed data
      } catch (error) {
        console.error("Error decoding or parsing data:", error);
        setNewData(null); // Set state to null on error
      }
    };
    if (data) {
      getData(); // Only call `getData` if `data` exists
    }
  }, [data]); // Dependency is only `data`

  // Render fallback UI if `newData` is null
  if (!newData) {
    return (
      <div className="w-96 p-5 m-auto flex flex-col justify-center items-center mt-14">
        <p className="text-red-500">Invalid data received</p>
      </div>
    );
  }

  return (
    <div className="w-96 p-5 m-auto space-y-2 flex flex-col justify-center items-center mt-14 shadow-lg shadow-slate-300 rounded-lg">
      <img className="h-32 mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYf-yn96mf5wuchdC1h_3PdzfM4KiBxA-Huw&s" alt="Success_Icon" />
      <h1>
        Transaction Code:
        <span className="text-red-500 underline">{newData.transaction_code}</span>
      </h1>
      <h1>
        Total Amount:{" "}
        <span className="text-red-500 underline">Rs.{newData.total_amount}</span>
      </h1>
      <h1>
        Status: <span className="text-red-500 underline">{newData.status}</span>
      </h1>
      <p>Payment Success</p>
    </div>
  );
}

export default Success;
