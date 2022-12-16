// React.JS Import
import { Fragment } from "react";

// Next JS Import
import Image from "next/future/image";

// Asset Import
import UserIcon from "../../../public/Icons/user.png";

// Styles Import
import styles from "./index.module.scss";

// Interface Import
import { IMedia } from "../../../interface/TvShow.interface";

interface ITableProps {
  title: string;
  data?: IMedia;
  starring?: any;
}

const Table: React.FunctionComponent<ITableProps> = ({
  title,
  data,
  starring,
}) => {
  let { Table, TableView } = styles;

  const renderStarring = () => {
    // Since the object is static, that's why I have used 'any' as a type.
    const actors = Object.entries(starring) as any;

    return actors.map((actor: any, index: number) => (
      <div className={TableView} key={index}>
        <Image src={UserIcon} height={40} width={40} alt="" />
        <p>{actor[0]}</p>
        <span>{actor[1]}</span>
      </div>
    ));
  };

  console.log(data?.genres);

  return (
    <Fragment>
      <div className={Table}>
        <h3>{title}</h3>
        {/* Separate Objects are used because the starring data is not populating from given API. */}
        {title === "Starring" ? (
          <Fragment>{renderStarring()}</Fragment>
        ) : (
          <Fragment>
            <div className={TableView}>
              <p>Streamed on</p>
              <span>BBC Three</span>
            </div>

            <div className={TableView}>
              <p>Schedule</p>
              <span>{data?.schedule?.days[0]}</span>
            </div>

            <div className={TableView}>
              <p>Status</p>
              <span>{data?.status}</span>
            </div>

            <div className={TableView}>
              <p>Genres</p>
              <span>
                {data && data?.genres.length > 0
                  ? data?.genres.map((genres: string) => `${genres}, `)
                  : "No Genres"}
              </span>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Table;
