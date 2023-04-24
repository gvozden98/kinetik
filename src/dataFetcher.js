import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const url =
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders";
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key":
            "728f36ea92msh477e8966317888bp1e397ejsnb8a8464a87c7",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setExerciseList(result);
        console.log(exerciseList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h1>List of Exercises</h1>
      <ul>
        {/* {exerciseList.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default DataFetcher;
