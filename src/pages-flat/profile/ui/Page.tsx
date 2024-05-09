import { Button, Card, Tabs, Typography } from "@/shared/components";
import { CommonLayout } from "@/widgets/common-layout";
import { Favorite } from "./Favorite";
import { useState } from "react";
import { Edit } from "lucide-react";
import { EditModal } from "./EditModal";

type PageProps = {};

export function Page({}: PageProps) {
  const [editModal, setEditModal] = useState(false);

  const [activeTab, setActiveTab] = useState("favorite");

  return (
    <CommonLayout>
      <div className="mt-10 w-full max-w-[920px] mx-auto grid gap-5 grid-cols-4">
        <Card className="col-span-1 self-start">
          <Card.Head className="items-center">
            <Card className="w-2/3 aspect-square overflow-hidden">
              <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-6xl">
                MB
              </div>
              {/* <img src="" className="w-full h-full" alt="profile" /> */}
            </Card>
            <Card.Title>Михаил Барулин</Card.Title>
            <Card.Description>misha-bebra@gmail.com</Card.Description>
          </Card.Head>
          <Card.Content className="flex flex-col">
            <Button onClick={() => setEditModal(true)} variant="dark" size="S">
              Редактировать <Edit className="w-4 ml-2" />
            </Button>
          </Card.Content>
        </Card>
        <div className="col-span-3">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
            <Tabs.TabItem tabKey="favorite">Избранные нейросети</Tabs.TabItem>
            <Tabs.TabItem tabKey="flow">Мои флоу</Tabs.TabItem>
            <Tabs.TabItem tabKey="favorite-flow">Избранные флоу</Tabs.TabItem>
          </Tabs>
          <div className="w-full mt-2">
            <Tabs.TabContent activeTab={activeTab} tabKey="favorite">
              <Favorite />
            </Tabs.TabContent>
            <Tabs.TabContent activeTab={activeTab} tabKey="flow">
              Flow
            </Tabs.TabContent>
          </div>
        </div>
      </div>
      <EditModal open={editModal} onClose={() => setEditModal(false)} />
    </CommonLayout>
  );
}
