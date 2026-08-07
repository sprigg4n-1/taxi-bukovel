import {
  Clock,
  Banknote,
  Mountain,
  Luggage,
  Baby,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  { id: "availability", icon: Clock },
  { id: "fixedPrice", icon: Banknote },
  { id: "roadKnowledge", icon: Mountain },
  { id: "skiLuggage", icon: Luggage },
  { id: "childSeats", icon: Baby },
  { id: "paymentOptions", icon: CreditCard },
];
