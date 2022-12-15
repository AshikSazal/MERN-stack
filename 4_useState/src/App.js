import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  // useState return two elements
  // 1st element is latest state snapshot
  // 2nd element is function that allows to updata that state snapshot
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&amp;A" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // first approach only when not depends on previous update data
    // setCourseGoals(courseGoals.concat(newGoal)); 

    // second approach only needed your state update depends on previous state's data
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
