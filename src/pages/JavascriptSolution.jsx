import SolutionHeader from "../componnets/SolutionHeader";

function JavascriptSolution() {
  const solutions = [
    {
      id: 1,
      data: "1 . some random text",
      body: "randomeETxt for 1 ",
    },
    {
      id: 2,
      data: "2. some coding text",
      body: "Random Soultion for 2",
    },
  ];

  return (
    <div>
      javaScriptSolution
      {solutions.map((solution) => (
        <SolutionHeader solution={solution} key={solution.id} />
      ))}
    </div>
  );
}

export default JavascriptSolution;
