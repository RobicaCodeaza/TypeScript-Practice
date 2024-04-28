import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '@/App';
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};

function CourseGoalList({ goals, onDelete }: CourseGoalListProps) {
  console.log(goals.length);

  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet.Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='high'>
        You&apos;re collectiong a lot of goals.Don&apos;t put too much on your
        plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((el) => (
          <li key={el.description}>
            <CourseGoal title={el.title} onDelete={() => onDelete(el.id)}>
              {el.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList;
