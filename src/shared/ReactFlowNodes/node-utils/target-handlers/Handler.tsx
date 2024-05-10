import { Input } from "../../types";
import { ImageHandler } from "./ImageHandler";
import { ImagesHandler } from "./ImagesHandler";
import { TextHandler } from "./TextHandler";

type HandlerProps = {
  id?: string;
  input: Input;
};

export function TargetHandler({ id, input }: HandlerProps) {
  if (input.type === "text") {
    return <TextHandler id={id} label={input.label} />;
  }

  if (input.type === "image") {
    return <ImageHandler id={id} label={input.label} />;
  }

  if (input.type === "images") {
    return <ImagesHandler id={id} input={input}  />;
  }

  return null;
}
