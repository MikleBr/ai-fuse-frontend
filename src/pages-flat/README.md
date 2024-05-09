## Папка pages-flat

Эта папка аналогичная директории pages по канонам FSD. Она перенесена сюда потому что обычный pages используется в нексте для роутинга. Поэтому все страницы изначально складываем сюда.

В папке ui обязательно должен быть компонент Page. Именно он будет использоваться в роутинге как страница.

Далее в pages экспортируйте его как:

```ts
// pages/some-page.tsx
import { Page } from "@/pages-flat/profile";

export default Page;
```

Аналогично делаем с ssr запросами getStaticProps и getServerSideProps. Они отдельно кладутся в файл ssr и используются на странице:

```ts
// pages/some-page.tsx
import { getServerSideProps } from "@/pages-flat/page-name";

export { getServerSideProps };
```

Итого страницы в pages выглядят примерно так:

```ts
// pages/some-page.tsx
import { Page, getServerSideProps } from "@/pages-flat/models";

export default Page;

export { getServerSideProps };
```

## Мне нужны типы из getServerSideProps в компоненте Page

В нексте нормальный подход прокидывать типы из getServerSideProps/getStaticProps в компонент страницы Page

Для этого есть специальный тип InferGetServerSidePropsType (для статики аналогично InferGetStaticPropsType). Используем примерно так:

```ts
// pages-flat/ui/Page.tsx
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../ssr";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export function Page(props: PageProps) {...}
```
