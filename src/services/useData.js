import { useQuery } from "@tanstack/react-query";

const URL = "https://leet-code-project-backend.vercel.app/api/data/v1/data";

async function getAllData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.docs;
  } catch (error) {
    return error.message;
  }
}

function useSolutions() {
  const { isLoading, data: response } = useQuery({
    queryKey: ["solutions"],
    queryFn: getAllData,
  });

  return { isLoading, response };
}
export default useSolutions;
