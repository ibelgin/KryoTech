export interface DataValueType {
  [x: string]: {
    [x: string]: React.SetStateAction<{
      current: number;
      gas: number;
      humidity: number;
      load: number;
      power: number;
      temp: number;
    }>;
  };
}
