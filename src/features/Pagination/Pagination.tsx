import { useRouter } from "next/router";
import styles from "./Pagination.module.scss";

type Paginationtype = {
  pages: number,
  currentPage: number
}

const Pagination = ({ pages, currentPage }: Paginationtype) => {
  const router = useRouter();

  const goToPage = (page: number): void => {
    router.push({
      pathname: `/page/${page}`,
    });
  };

  return (
    <div className={styles.button_wrapper}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}>
        Prev
      </button>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= pages}>
        Next
      </button>
      <button onClick={() => goToPage(pages)}>Last page</button>
    </div>
  );
};

export default Pagination;
