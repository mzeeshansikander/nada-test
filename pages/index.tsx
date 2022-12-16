// React.JS Import.
import { Fragment } from "react";

// Next.JS import.
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

// Component Import.
import TvShows from "../Components/PageComponents/TvShows";

//Interface Import
import { IMedia } from "../interface/TvShow.interface";

interface ITvShowsProps {
  shows: IMedia[];
}

const Home: NextPage<ITvShowsProps> = ({ shows }) => {
  return (
    <Fragment>
      <Head>
        <title>Nada Test</title>
      </Head>
      <TvShows shows={shows} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const shows = await fetch("https://api.tvmaze.com/schedule")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  return {
    props: {
      shows: shows,
    },
  };
};

export default Home;
