// React.JS Import.
import { Fragment } from "react";

// Next.JS import.
import Head from "next/head";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";

// Component Import.
import SingleTvShow from "../../Components/PageComponents/SignleTvShow";

//Interface Import
import { IMedia } from "../../interface/TvShow.interface";

interface ISingleShowProps {
  show: IMedia;
}

const SingleShow: NextPage<ISingleShowProps> = ({ show }) => {
  return (
    <Fragment>
      <Head>
        <title>Single Show</title>
      </Head>
      <SingleTvShow show={show} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  // ! represents: The slug will not be empty.
  const { slug } = params!;

  const show = await fetch(`https://api.tvmaze.com/shows/${slug}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  return {
    props: {
      show: show,
    },
  };
};

export default SingleShow;
