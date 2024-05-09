import { ModelCard } from "./ModelCard";

type FavoriteProps = {};

export function Favorite({}: FavoriteProps) {
  return (
    <div className="grid gap-4 grid-cols-2">
      <ModelCard />
      <ModelCard />
      <ModelCard />
      <ModelCard />
    </div>
  );
}
