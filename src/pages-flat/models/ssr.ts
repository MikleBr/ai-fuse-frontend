import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type SSRResult = {};

export function getServerSideProps(
  context: GetServerSidePropsContext
): GetServerSidePropsResult<SSRResult> {
  return {
    props: {},
  };
}
