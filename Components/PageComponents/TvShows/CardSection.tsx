// React.JS Import
import { Fragment } from "react";

// Interface Import.
import { IMedia } from "../../../interface/TvShow.interface";

// Component Import
import Card from "../../Reusable/Card";

// Styles Import
import styles from "./CardSection.module.scss";

interface ICardSectionProps {
  shows: IMedia[];
}

const CardSection: React.FunctionComponent<ICardSectionProps> = ({ shows }) => {
  let { Container, Title, CardWrapper } = styles;

  return (
    <Fragment>
      <div className={Container}>
        <h3 className={Title}>Last Added Shows</h3>
        <div className={CardWrapper}>
          {shows
            ? shows
                .slice(0, 20)
                .map((card: IMedia, index: number) => (
                  <Card {...card} key={index} />
                ))
            : null}
        </div>
      </div>
    </Fragment>
  );
};

export default CardSection;
