import { Button, TextField } from "@/shared/components";
import { Globe, Save, Share } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ToolbarProps = {};

export function Toolbar({}: ToolbarProps) {
  const [name, setName] = useState("Новый блок");

  return (
    <div className="absolute items-center px-6 top-0 left-0 w-full flex border-b border-b-stone-300 h-12 bg-white z-10">
      <div className="w-1/3 flex items-center gap-4">
        <Link
          href="/"
          className="text-sm bg-black text-white px-2 py-0.5 rounded-md"
        >
          На главную
        </Link>
      </div>
      <div className="w-1/3 flex justify-center">
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="w-1/3 flex justify-end gap-2">
        <Button size="S" variant="dark">
          <Globe className="mr-1 w-5" /> Опубликовать
        </Button>
        <Button size="S">
          <Save className="mr-1 w-5" /> Сохранить
        </Button>
        <Button variant="secondary" size="S">
          <Share className="mr-1 w-5" /> Поделиться
        </Button>
      </div>
    </div>
  );
}
