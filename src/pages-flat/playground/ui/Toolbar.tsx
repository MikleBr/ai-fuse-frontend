import Link from "next/link";

type ToolbarProps = {};

export function Toolbar({}: ToolbarProps) {
  return (
    <div className="absolute items-center px-6 top-0 left-0 w-full flex gap-4 border-b border-b-stone-300 h-7 bg-white z-10">
      <div className="text-sm">New playground</div>
      <div className="text-sm">Edit</div>
      <Link href="/" className="text-sm bg-black text-white px-2 py-0.5 rounded-md">На главную</Link>
    </div>
  );
}
