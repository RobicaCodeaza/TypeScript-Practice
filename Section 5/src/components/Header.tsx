import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext, useTimersContext } from '@/store/timers-context.tsx';

export default function Header() {
  const timersCtx = useTimersContext();

  if (timersCtx === null) {
    throw new Error('Smth wrong happened');
  }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
