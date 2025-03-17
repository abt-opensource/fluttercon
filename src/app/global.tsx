"use client";

import { createContext, useState, type ReactNode } from "react";

interface StrokeContextType {
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
  color: string;
  setColor: (color: string) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
}

export const StrokeContext = createContext<StrokeContextType | undefined>(undefined);

interface StrokeProviderProps {
  children: ReactNode;
}

export const StrokeProvider: React.FC<StrokeProviderProps> = ({ children }) => {
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [color, setColor] = useState<string>("#FFFFFF");
  const [iconSize, setIconSize] = useState<number>(24);

  return (
    <StrokeContext.Provider value={{ strokeWidth, setStrokeWidth, color, setColor, iconSize, setIconSize }}>
      {children}
    </StrokeContext.Provider>
  );
};
