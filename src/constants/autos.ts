import type { StaticImageData } from "next/image";

import bmwImage from "@/images/autos/bmw.jpg";
import renoImage from "@/images/autos/reno.jpg";

export interface Auto {
  id: string;
  seats: number;
  img: StaticImageData;
}

export const autos: Auto[] = [
  {
    id: "bmw320",
    seats: 4,
    img: bmwImage,
  },
  {
    id: "renaultTrafic",
    seats: 8,
    img: renoImage,
  },
];
