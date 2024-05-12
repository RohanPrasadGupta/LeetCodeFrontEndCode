// import axios from "axios";

// const URL = "http://localhost:3000/api/data/v1/data";
// // const URL =  "https://leetcodeprojectbackend-production-d266.up.railway.app/api/data/v1/data";

// export const getAllData = async () => {
//   try {
//     // const response = await axios.get(URL);
//     const response = await axios.get(URL);
//     // console.log(response.data.docs);
//     return response.data.docs;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// --------------------------------------------------------

const URL =
  "https://leetcodeprojectbackend-production-d266.up.railway.app/api/data/v1/data";

export const getAllData = async () => {
  try {
    // const response = await axios.get(URL);
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data.docs);
    return data.docs;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
