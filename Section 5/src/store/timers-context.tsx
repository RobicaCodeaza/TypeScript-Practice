/* eslint-disable react-refresh/only-export-components */
import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

type StartTimersAction = {
  type: 'startTimers';
};
type StopTimersAction = {
  type: 'stopTimers';
};
type AddTimerAction = {
  type: 'addTimer';
  payload: Timer;
};

type DispatchType = StartTimersAction | StopTimersAction | AddTimerAction;

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};
function reducer(state: TimersState, action: DispatchType): TimersState {
  switch (action.type) {
    case 'startTimers':
      return { ...state, isRunning: true };
    case 'stopTimers':
      return { ...state, isRunning: false };
    case 'addTimer':
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    default:
      throw new Error('unknown action');
  }
}

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = { children: ReactNode };

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'addTimer', payload: timerData });
    },
    startTimers() {
      //...
      dispatch({ type: 'startTimers' });
    },
    stopTimers() {
      //...
      dispatch({ type: 'stopTimers' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  console.log(timersCtx);
  if (timersCtx === null)
    throw new Error(
      'The context has been consumed by a component that does not have access to it.'
    );

  return timersCtx;
}

export { TimersContextProvider, useTimersContext, TimersContext };
