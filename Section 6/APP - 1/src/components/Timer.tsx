import Container from './UI/Container.tsx';
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingState, setRemainingState] = useState(duration * 1000);
  const interval = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remainingState <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(
    function () {
      let timer: number;
      // console.log('again');
      if (isRunning) {
        timer = setInterval(function () {
          setRemainingState((remainingState) => {
            if (remainingState > 0) return remainingState - 1000;
            else return remainingState;
          });
        }, 50);
        interval.current = timer;
      } else if (interval.current) {
        clearInterval(interval.current);
      }

      return () => clearInterval(timer);
    },
    [isRunning]
  );

  const formattedRemainingTime = (remainingState / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
