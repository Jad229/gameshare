interface IGame {
  id: string;
  [key: string]: any;
}

interface IGameList {
  count: number;
  next: string;
  previous: string;
  results: IGame[];
}

export type { IGame, IGameList };
