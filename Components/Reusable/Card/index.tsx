// React.JS Import
import { Fragment } from "react";

// Next JS Import
import Image from "next/future/image";
import { useRouter } from "next/router";

// Styles Import
import styles from "./index.module.scss";

// Npm Import
//@ts-ignore
import ReactStars from "react-rating-stars-component";

interface ICardProps {}

const Card: React.FunctionComponent<any> = ({ show }) => {
  let { Box } = styles;

  const router = useRouter();

  const IMAGE_URL = show.image.medium;

  const SHOW_NAME = show.name;

  /**
   * Redirect User To Specific Tv Show Details Page.
   */
  const RedirectToTvShowDetail = (id: number) => {
    router.push(`show/${id}`);
  };

  return (
    <Fragment>
      <div className={Box} onClick={() => RedirectToTvShowDetail(show.id)}>
        <Image
          src={IMAGE_URL}
          alt=""
          width={220}
          height={250}
          style={{ width: "100%" }}
        />
        <ReactStars count={5} size={24} activeColor="#ffd700" />
        <p>{SHOW_NAME}</p>
      </div>
    </Fragment>
  );
};

export default Card;
