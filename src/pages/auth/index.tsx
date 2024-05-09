import { GetServerSidePropsResult } from "next";

export default function Page(){
    return null;
}


export function getServerSideProps(): GetServerSidePropsResult<{}> {
    return {
        redirect: {
            destination: '/auth/signin',
            permanent: true,
        }
    }
}
