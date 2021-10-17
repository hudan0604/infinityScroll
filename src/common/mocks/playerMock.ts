import { PlayerPaginatedResponse } from "../models/Player.models";

const firstnames = [
  "Thomas",
  "Jacky",
  "Dédé",
  "Roger",
  "Paulo",
  "Germaine",
  "Gertrude",
  "Juliette",
  "Marjorie",
  "Bertrand",
  "Christophe",
  "Fabrice",
  "Nicolas",
  "Philippe",
  "Astrid",
  "Aurélie",
  "Pete",
  "James",
  "Peter",
];
const lastnames = [
  "Cameron",
  "Thole",
  "Durand",
  "Kikil",
  "Popor",
  "Roche",
  "Thoussey",
  "Drunki",
  "Loaieu",
  "Koaien",
  "Jkoaje",
  "Jionalel",
  "sdkjbsdjb",
  "Huomel",
  "Huayey",
  "Hjkiaiee",
  "Honeke",
  "Jouler",
  "Bertrandus",
  "Juiol",
];

const getRandom = (arr: string[]): any => arr[Math.floor(Math.random() * 19)];

export const PlayersMock: PlayerPaginatedResponse = {
  results: [
    ...Array(5)
      .fill(null)
      .map((el, index: number) => ({
        page: index + 1,
        players: [
          ...Array(10)
            .fill(null)
            .map(() => ({
              firstName: getRandom(firstnames),
              lastName: getRandom(lastnames),
              age: Math.floor(Math.random() * 90),
              address: "20 avenue de la Boétie",
            })),
        ],
      })),
  ],
  totalPages: 5,
};
