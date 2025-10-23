import {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface DataProviderProps<T> {
  jsonFile: string;
  children: ReactNode;
}

export interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function createDataContext<T>() {
  const Context = createContext<DataState<T> | undefined>(undefined);

  const Provider: FC<DataProviderProps<T>> = ({ jsonFile, children }) => {
    const [state, setState] = useState<DataState<T>>({
      data: null,
      loading: true,
      error: null,
    });

    useEffect(() => {
      setState({ data: null, loading: true, error: null });

      fetch(`${jsonFile}?v=${Date.now()}`)
        .then((res) => {
          if (!res.ok)
            throw new Error(`Nie udało się pobrać pliku: ${jsonFile}`);
          return res.json();
        })
        .then((json: T) =>
          setState({ data: json, loading: false, error: null })
        )
        .catch((err) => setState({ data: null, loading: false, error: err }));
    }, [jsonFile]);

    return <Context.Provider value={state}>{children}</Context.Provider>;
  };

  const useData = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error(
        "DataProvider: kontekst nie został poprawnie zainicjalizowany"
      );
    }
    return ctx;
  };

  return { Provider, useData };
}
