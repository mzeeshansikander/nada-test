// React.JS Import
import { Fragment } from "react";

// Next JS Import
import Image from "next/future/image";

// Styles Import
import styles from "./HeroSection.module.scss";

// Interface Import
import { IMedia } from "../../../interface/TvShow.interface";

// Npm Import
//@ts-ignore
import ReactStars from "react-rating-stars-component";

interface IHeroSectionProps {
  show: IMedia;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = ({ show }) => {
  let { Container, Wrapper, Title, RatingStack, DetailSection, Content } =
    styles;

  const { image, name, summary, rating } = show;

  const calculateRating = () => {
    return <p>{rating.average ? rating.average : 0}/10</p>;
  };

  return (
    <Fragment>
      <div className={Container}>
        <div className={Wrapper}>
          <h2 className={Title}>Tv Bland</h2>
          <div className={DetailSection}>
            <Image src={image.original} width={250} height={300} alt="" />
            <div className={Content}>
              {/* Ratings */}
              <div className={RatingStack}>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
                {calculateRating()}
              </div>
              {/* Title */}
              <h1 className={Title}>{name}</h1>
              {/* Description */}
              <p>{summary.replaceAll("<p>", "")}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
