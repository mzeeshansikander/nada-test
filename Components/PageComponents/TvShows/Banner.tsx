// React.JS Import
import { Fragment } from "react";

// Styles Import
import styles from "./Banner.module.scss";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  let { Banner, Wrapper, Title } = styles;

  return (
    <Fragment>
      <div className={Banner}>
        <div className={Wrapper}>
          <h2 className={Title}>Tv Bland</h2>
          <p>Tv Shows and web series database.</p>
          <p>
            Create personalized schedules. Episode guide, cast, and, character
            information
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
