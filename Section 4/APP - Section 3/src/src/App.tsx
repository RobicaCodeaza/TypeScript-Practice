import { useState } from 'react';

import headerImg from './assets/goals.jpg';
import Header from './Components/Header';
import CourseGoalList from './Components/CourseGoalList';
import NewGoal from './Components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(newGoal: CourseGoal) {
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: headerImg, alt: 'List of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal}></NewGoal>
      <CourseGoalList
        goals={goals}
        onDelete={handleDeleteGoal}
      ></CourseGoalList>
      {/* <CourseGoal></CourseGoal> */}
    </main>
  );
}
