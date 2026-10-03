import { notFound } from "next/navigation";

// Unknown paths would otherwise skip [locale]/not-found.tsx and show the default 404.
export default function CatchAllPage() {
  notFound();
}
