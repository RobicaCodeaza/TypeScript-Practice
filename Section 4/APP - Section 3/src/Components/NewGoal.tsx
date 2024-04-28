import { CourseGoal } from '@/App';
import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: CourseGoal) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    if (!enteredGoal || !enteredSummary) return;
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: enteredGoal,
      description: enteredSummary,
    };
    e.currentTarget.reset();
    onAddGoal(newGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={event => {}}> */}
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' ref={goal}></input>
      </p>
      <p>
        <label htmlFor='goal'>Short Summary</label>
        <input id='summary' type='text' ref={summary}></input>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
