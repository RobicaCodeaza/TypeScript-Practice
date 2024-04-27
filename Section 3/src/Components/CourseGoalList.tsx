import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '@/App';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((el) => (
        <li key={el.description}>
          <CourseGoal title={el.title} onDelete={() => onDelete(el.id)}>
            {el.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
