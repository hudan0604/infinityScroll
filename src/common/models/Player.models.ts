export interface Player {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}

export interface PlayerPaginatedResponse {
  results: {
    page: number;
    players: Player[];
  }[];
  totalPages: number;
}
