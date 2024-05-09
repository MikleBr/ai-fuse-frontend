import Image from "next/image";
import notFoundSvg from "/public/images/Error500.svg";
import { CommonLayout } from "@/widgets/common-layout";
import { Typography } from "@/shared/components";

export function Page() {
  return (
    <CommonLayout withBanner={false}>
      <div className="w-full flex flex-col items-center">
        <Image src={notFoundSvg} alt="Not found" />
        <Typography.Heading level={2}>
          Произошла ошибка
        </Typography.Heading>
      </div>
    </CommonLayout>
  );
}
