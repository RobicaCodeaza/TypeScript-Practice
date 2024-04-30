import { type ReactNode, createContext, useContext, useReducer } from 'react';

type Timer = {
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

type DispatchType = {
  type: 'addTimer' | 'startTimers' | 'stopTimers';
  payload: any;
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};
function reducer(state: TimersState, action: DispatchType): TimersState {
  switch (action.type) {
    case 'startTimers':
      return { ...state };
    default:
      throw new Error('unknown action');
  }
}

const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = { children: ReactNode };

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(reducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: true,
    addTimer(timerData) {
      dispatch({ type: 'addTimer', payload: '' });
    },
    startTimers() {
      //...
      dispatch({ type: 'startTimers', payload: '' });
    },
    stopTimers() {
      //...
      dispatch({ type: 'stopTimers', payload: '' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null)
    throw new Error(
      'The context has been consumed by a component that does not have access to it.'
    );

  return timersCtx;
}

export { TimersContextProvider, useTimersContext, TimersContext };
