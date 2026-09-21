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
    id: "tatariv-yaremche",
    from: "tatariv",
    to: "yaremche",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
  {
    id: "tatariv-mykulychyn",
    from: "tatariv",
    to: "mykulychyn",
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
  {
    id: "yaremche-bukovel",
    from: "yaremche",
    to: "bukovel",
    price: 800,
    durationMinutes: 30,
    distanceKm: 15,
    icon: null,
  },
];
