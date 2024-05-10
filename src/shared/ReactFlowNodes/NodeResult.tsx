import {
  Combine,
  MessageCircle,
  PaintbrushIcon,
  SendToBack,
} from "lucide-react";
import { Card } from "../components";
import { NodeData } from "./types";

type NodeResultProps = {
  status: NodeData["status"];
  result: NodeData["result"];
};

export function NodeResult({ result, status }: NodeResultProps) {
  if (!result?.data) {
    return <EmptyResult result={result} />;
  }

  const { data, type } = result;

  if (type === "image") {
    return (
      <Card className="my-4 mx-auto overflow-hidden w-[200px] flex items-center justify-center bg-muted aspect-square">
        <img src={data.image} className="w-full h-full object-contain" />
      </Card>
    );
  }

  if (type === "text") {
    return (
      <Card className="my-4 mx-auto overflow-hidden w-[200px] flex items-center justify-center bg-muted aspect-square">
        {data.text}
      </Card>
    );
  }

  if (type === "images") {
    return (
      <Card  className="my-4 mx-auto overflow-hidden w-[200px] flex flex-wrap bg-muted aspect-square">
        {data.images.map(image => <img src={image} className="w-1/2 h-1/2" />)}
      </Card>
    );
  }

  return null;
}

const previewIcons: Record<string, any> = {
  image: PaintbrushIcon,
  images: Combine,
  chat: MessageCircle,
};

function EmptyResult({ result }: { result: NodeData["result"] }) {
  const Icon = previewIcons[result?.type];
  return (
    <Card className="my-4 mx-auto overflow-hidden w-[200px] flex items-center justify-center bg-muted aspect-square">
      {Icon && <Icon width={80} height={80} />}
    </Card>
  );
}
