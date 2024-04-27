import { useState } from 'react';

import headerImg from './assets/goals.jpg';
import Header from './Components/Header';
import CourseGoalList from './Components/CourseGoalList';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn React + TypeScript',
        description: 'Learn it in depth',
      };
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
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList
        goals={goals}
        onDelete={handleDeleteGoal}
      ></CourseGoalList>
      {/* <CourseGoal></CourseGoal> */}
    </main>
  );
}
