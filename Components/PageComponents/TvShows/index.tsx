// React.JS Import
import { Fragment } from "react";

// Interface Import.
import { IMedia } from "../../../interface/TvShow.interface";

// Component Import
import Banner from "./Banner";
import CardSection from "./CardSection";

// Styles Import
import styles from "./index.module.scss";

interface ITvShowsProps {
  shows: IMedia[];
}

const TvShows: React.FunctionComponent<ITvShowsProps> = ({ shows }) => {
  let { Container } = styles;

  return (
    <Fragment>
      <div className={Container}>
        <Banner />
        <CardSection shows={shows} />
      </div>
    </Fragment>
  );
};

export default TvShows;
