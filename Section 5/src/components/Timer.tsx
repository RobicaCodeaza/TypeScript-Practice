import { type Timer } from '@/store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: Timer) {
  return (
    <Container as='article'>
      <h2>{name}</h2>
      <h2>{duration}</h2>
    </Container>
  );
}
