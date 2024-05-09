import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{test: 123}> = async (context) => {
  return {
    props: {
      test: 123
    },
  };
};
