import { type Model, modelMock } from "@/shared/mocks/model";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type SSRResult = {
  model: Model
};

export function getServerSideProps(
  context: GetServerSidePropsContext
): GetServerSidePropsResult<SSRResult> {
  return {
    props: {
      model: modelMock
    },
  };
}
