export type LocationKey =
  | "tatariv"
  | "bukovel"
  | "yaremche"
  | "mykulychyn"
  | "polyanytsia";

export interface DestinationRoute {
  id: string;
  from: LocationKey;
  to: LocationKey;
  price: number;
  durationMinutes: number;
  distanceKm: number;
  icon: string | null;
}

export const destinationRoutes: DestinationRoute[] = [
  {
    id: "tatariv-bukovel",
    from: "tatariv",
    to: "bukovel",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
  {
    id: "yaremche-tatariv",
    from: "yaremche",
    to: "tatariv",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
  {
    id: "yaremche-bukovel",
    from: "yaremche",
    to: "bukovel",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
  {
    id: "mykulychyn-tatariv",
    from: "mykulychyn",
    to: "tatariv",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
  {
    id: "tatariv-polyanytsia",
    from: "tatariv",
    to: "polyanytsia",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
];
