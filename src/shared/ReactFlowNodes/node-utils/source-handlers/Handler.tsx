import { ImageHandler } from "./ImageHandler";
import { TextHandler } from "./TextHandler";

type HandlerProps = {
  id?: string;
  input: {
    label: string;
    type: string;
  };
};

export function SourceHandler({ id, input }: HandlerProps) {
  if (input.type === "text") {
    return <TextHandler id={id} label={input.label} />;
  }

  if (input.type === "image") {
    return <ImageHandler id={id} label={input.label} />;
  }

  return null;
}
