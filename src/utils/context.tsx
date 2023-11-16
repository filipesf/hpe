import { createContext, useContext, useState } from 'react';
import { Home } from 'shared/types';

interface AppContextProps {
  homes: Home[];
  setHomes: React.Dispatch<React.SetStateAction<Home[]>>;
  bookmarkedItems: string[];
  setBookmarkedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [homes, setHomes] = useState<Home[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{ homes, setHomes, bookmarkedItems, setBookmarkedItems }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export default AppContext;
