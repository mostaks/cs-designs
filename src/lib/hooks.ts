import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
  createContext,
  MutableRefObject
} from 'react';
import { ThemeContext } from 'styled-components';

export interface HandleAlertProps {
  errors: any;
  rollbarMsg: string;
  successMsg: string;
}

export interface PageContextModel {
  AlertContainer: MutableRefObject<Partial<AlertContainerModel> | null> | null;
  category: any;
  location: any;
  dynamicPageData: Record<any, any>;
  params: Record<string, any>;
}


interface MessageModel {
  message: string;
}

interface AlertContainerModel extends HTMLDivElement {
  success: (message: MessageModel) => MessageModel;
  error: (message: MessageModel) => MessageModel;
}

export interface PageContextModel {
  AlertContainer: MutableRefObject<Partial<AlertContainerModel> | null> | null;
  category: any;
  location: any;
  dynamicPageData: Record<any, any>;
  params: Record<string, any>;
}

const PageContext = createContext<Partial<PageContextModel>>({
  AlertContainer: null,
  category: null,
  location: null,
  dynamicPageData: {},
  params: {}
});

// Returns current window size
export const useWindowResize = (defaultSize: number) => {
  const [viewportWidth, setViewportWidth] = useState(defaultSize);
  const updateWindowDimensions = useCallback(() => {
    setViewportWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    updateWindowDimensions();
    return () => { window.removeEventListener('resize', updateWindowDimensions); };
  }, [updateWindowDimensions]);
  return viewportWidth;
};

// Checks window size is greater than the provided breakpoint, returns boolean
export const useIsBreakpoint = (
  breakpoint: string,
  defaultSize = (typeof window !== 'undefined') ? window.innerWidth : 0
) => {
  const viewportWidth = useWindowResize(defaultSize);
  const themeContext = useContext(ThemeContext);
  const breakpointValue = parseInt(themeContext.breakpoint[breakpoint].min, 10);
  const [isBreakpoint, setIsBreakpoint] = useState(viewportWidth >= breakpointValue);
  useEffect(() => {
    setIsBreakpoint(viewportWidth >= breakpointValue);
  }, [breakpoint, breakpointValue, viewportWidth]);
  return isBreakpoint;
};

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(null);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return savedCallback.current;
  }, [delay]);
};

export const useClock = () => {
  const [clock, setClock] = useState < Date > (new Date());
  useInterval(() => {
    setClock(new Date());
  }, 1000);
  return clock;
};

export const useHandleMutationAlert = () => {
  const { AlertContainer } = useContext < Partial < PageContextModel >> (PageContext);

  const handleAlert = useCallback(({
    errors, rollbarMsg, successMsg
  }: Partial<HandleAlertProps>) => {
    if (errors) {
      const errorMsg = errors?.[0]?.message;

      AlertContainer?.current?.error({
        message: errorMsg || 'Something went wrong, please try again'
      });
      return;
    }

    if (successMsg) {
      AlertContainer?.current?.success({
        message: successMsg
      });
    }
  }, [AlertContainer]);

  return [handleAlert];
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(null);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
    const gotValue = item ? JSON.parse(item) : initialValue;

    setStoredValue(gotValue);
    } catch (error) {
      const errorMsg = error?.message;

    setStoredValue(initialValue);
    }
  }, [key, initialValue]);

    const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
      }
    },
    [key, storedValue]
    );

    return [storedValue, setValue] as const;
};

export const useIsMounted = () => {
  const ref = useRef(false);
    const [, setIsMounted] = useState(false);

  useEffect(() => {
      ref.current = true;
    setIsMounted(true);
    return () => {ref.current = false; };
  }, []);

    return ref.current;
};
