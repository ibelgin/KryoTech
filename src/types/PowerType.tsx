export interface PowerType {
  [x: string]: {
    [x: string]: React.SetStateAction<{
      power: number;
    }>;
  };
}
