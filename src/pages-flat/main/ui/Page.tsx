// FIXME: Надо в общий компонент вынести
import { ModelCard } from "@/pages-flat/models/ui/ModelCard";
import { Button, Card, Typography } from "@/shared/components";
import { CommonLayout } from "@/widgets/common-layout";
import ReactFlow, { Background, BackgroundVariant } from "reactflow";

type PageProps = {};

export function Page({}: PageProps) {
  return (
    <CommonLayout wrapperClassName="max-w-[unset] bg-muted w-full">
      <section className="bg-primary pt-20 w-full h-[calc(50vh)]">
        <div className="content-container">
          <Typography.Heading className="m-0 text-7xl" Component="h1">
            Лучшие нейросети
            <br />в одном месте
          </Typography.Heading>
          <Typography.Paragraph
            Component="p"
            className="text-xl mt-5 text-primary-foreground"
          >
            Объединяйте разные нейросети в одном потоке с помощью беброчки
          </Typography.Paragraph>
          <div className="flex gap-4 mt-16">
            <Button variant="dark" size="L" className="text-lg font-light">
              Узнать больше
            </Button>
            <Button
              variant="outline"
              className="text-lg font-light hover:bg-black hover:text-white border-black bg-transparent"
              size="L"
            >
              Бесплатный период
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="content-container flex gap-4">
          <div className="w-2/5 flex flex-col">
            <Typography.Heading level={1} className="m-0">
              Объединяйте нейросети
              <br />с помощью блоков
            </Typography.Heading>
            <Typography.Paragraph className="my-5">
              Мы разработали целое нихуя. Создавайте, делитесь
              и&nbsp;используйте блоки внутри комьюнити.
            </Typography.Paragraph>
            <Button size="L" className="w-fit">
              Узнать больше
            </Button>
          </div>
          <div className="w-3/5">
            <ReactFlow className="bg-stone-200 !h-[600px] rounded-xl">
              <Background
                size={6}
                variant={BackgroundVariant.Cross}
                color="#c3c3c3"
              />
            </ReactFlow>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="content-container flex gap-8">
          <div className="w-1/2 grid grid-cols-2 gap-4">
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
          </div>
          <div className="w-1/2 flex flex-col">
            <Typography.Heading level={1} className="m-0">
              Популярные нейросети
              <br />в одном месте
            </Typography.Heading>
            <Typography.Paragraph className="my-5">
              Не нужно покупать подписку на популярные нейросети такие как
              Midjourney, ChatGPT. Мы позаботились об этом за вас и сделали
              интерактивный каталог. Все нейросети доступны для использования в
              одной подписке
            </Typography.Paragraph>
            <Button size="L" className="w-fit">
              Смотреть тарифы
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="content-container">
          <div className="flex flex-col items-center">
            <Typography.Heading level={1} className="m-0 text-center">
              Тарифы
            </Typography.Heading>
            <Typography.Paragraph className="mt-2 mb-5 text-center max-w-[480px]">
              Возможные варианты подписки
            </Typography.Paragraph>
          </div>
          <div className="w-full flex justify-center gap-10">
            <Card>
              <Card.Head>
                <Card.Title className="text-xl">Тариф "Бомж"</Card.Title>
                <Card.Description>Для пидоров без денег</Card.Description>
              </Card.Head>
              <Card.Content>
                <ul className="list-disc list-inside">
                  <li>Позиция один</li>
                  <li>Позиция два</li>
                  <li>Позиция три</li>
                  <li>Позиция четыре</li>
                  <li>Позиция пять</li>
                </ul>
                <div>1 000 руб/мес</div>
                <Button className="w-full mt-5">Подключить</Button>
              </Card.Content>
            </Card>
            <Card>
              <Card.Head>
                <Card.Title className="text-xl">Тариф "Бомж"</Card.Title>
                <Card.Description>Для пидоров без денег</Card.Description>
              </Card.Head>
              <Card.Content>
                <ul className="list-disc list-inside">
                  <li>Позиция один</li>
                  <li>Позиция два</li>
                  <li>Позиция три</li>
                  <li>Позиция четыре</li>
                  <li>Позиция пять</li>
                </ul>
                <div>2 500 руб/мес</div>
                <Button className="w-full mt-5">Подключить</Button>
              </Card.Content>
            </Card>
            <Card>
              <Card.Head>
                <Card.Title className="text-xl">Тариф "Бомж"</Card.Title>
                <Card.Description>Для пидоров без денег</Card.Description>
              </Card.Head>
              <Card.Content>
                <ul className="list-disc list-inside">
                  <li>Позиция один</li>
                  <li>Позиция два</li>
                  <li>Позиция три</li>
                  <li>Позиция четыре</li>
                  <li>Позиция пять</li>
                </ul>
                <div>5 000 руб/мес</div>
                <Button className="w-full mt-5">
                    Подключить
                </Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
    </CommonLayout>
  );
}
