// React.JS Import
import { Fragment } from "react";

// Component Import
import HeroSection from "./HeroSection";
import Table from "../../Reusable/Table";

// Styles Import
import styles from "./index.module.scss";

// Interface Import
import { IMedia } from "../../../interface/TvShow.interface";

interface ISingleTvShowProps {
  show: IMedia;
}

const starring = {
  "Victoria Alcock": "Carol",
  "Hugo Chegwin": "Beats",
  "Allan Mustafa": "Grndah",
  "Daniel Woolfrod": "Decoy",
};
const SingleTvShow: React.FunctionComponent<ISingleTvShowProps> = ({
  show,
}) => {
  const { TableContainer } = styles;

  return (
    <Fragment>
      <HeroSection show={show} />
      <div className={TableContainer}>
        <Table title="Show Info" data={show} />
        <Table title="Starring" starring={starring} />
      </div>
    </Fragment>
  );
};

export default SingleTvShow;
