import { useRouter } from "next/router";
import styles from "./Pagination.module.scss";
import Link from "next/link";

type Paginationtype = {
  pages: number;
  currentPage: number;
};

const Pagination = ({ pages, currentPage }: Paginationtype) => {
  currentPage = typeof currentPage === "number" ? currentPage : 1;

  return (
    <div className={styles.button_wrapper}>
      <Link
        href={
          "/page/" + (currentPage - 1 === 0 ? 1 : currentPage - 1).toString()
        }>
        <a>Prev</a>
      </Link>
      <Link
        href={
          "/page/" +
          (currentPage + 1 > pages ? currentPage : currentPage + 1).toString()
        }>
        <a>Next</a>
      </Link>
      <Link href={"/page/" + pages}>
        <a>Last page</a>
      </Link>
    </div>
  );
};

export default Pagination;
