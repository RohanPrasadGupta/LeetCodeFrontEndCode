// import { getAllData } from "../services/readData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchBox from "../componnets/SearchBox";
import EasyLevel from "../ui/EasyLevel";
import HardLevel from "../ui/HardLevel";
import MediumLevel from "../ui/MediumLevel";
import SolutionLevel from "../ui/SolutionLevel";
import CodeBody from "./CodeBody";
import LoadingPage from "../pages/LoadingPage";
import Header from "../componnets/Header";
import Footer from "../componnets/Footer";
// import { useMutation } from "@tanstack/react-query";

import useSolutions from "../services/useData";

function Home() {
  const [solutions, setSoulutions] = useState([]);
  const { isLoading, response } = useSolutions();
  const [searchQuestion, setSearchQuestion] = useState("");

  useEffect(() => {
    if (response) {
      setSoulutions(response);
    }
  }, [response]);

  const easySolution = solutions.reduce(
    (prev, solution) => prev + (solution.Level === "Easy" ? 1 : 0),
    0
  );

  const mediumSolution = solutions.reduce(
    (prev, solution) => prev + (solution.Level === "Medium" ? 1 : 0),
    0
  );

  const hardSolution = solutions.reduce(
    (prev, solution) => prev + (solution.Level === "Hard" ? 1 : 0),
    0
  );

  const searchedSolution =
    searchQuestion.length > 0
      ? solutions.filter((solution) =>
          `${solution.Title}`.toLowerCase().includes(searchQuestion)
        )
      : solutions;

  return (
    <>
      {isLoading && <LoadingPage />}
      {!isLoading && (
        <>
          <Header />
          <SolutionLevel>
            <motion.div whileHover={{ scale: 1.2 }}>
              <EasyLevel>Easy: {easySolution}</EasyLevel>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }}>
              <MediumLevel>Medium: {mediumSolution}</MediumLevel>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <HardLevel>Hard: {hardSolution}</HardLevel>
            </motion.div>
          </SolutionLevel>

          <SearchBox setSearchQuestion={setSearchQuestion} />

          <CodeBody solutions={searchedSolution} />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
