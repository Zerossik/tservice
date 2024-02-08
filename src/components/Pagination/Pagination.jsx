import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// style
import {
  Wrapper,
  PagesList,
  PagesListItem,
  Dots,
  PageButton,
  IconLeft,
  IconRight,
} from "./Pagination.styled";
// components
import { selectTotalOrders } from "../../redux/contacts/selectors";

const limit = 20;

export const Pagination = () => {
  const [pickedPages, setPickedPages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const totalOrders = useSelector(selectTotalOrders);

  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  const createArrayBasedOnActivePage = (activePage, lastPage) => {
    const step = 1;

    if (activePage === 1 || activePage === 2) {
      const pages = lastPage < 3 ? lastPage : 3;
      return range(1, pages, step);
    }

    if (activePage > 1 && activePage < lastPage) {
      return range(activePage - 1, activePage + 1, step);
    }

    if (activePage === lastPage && lastPage >= 3) {
      return range(lastPage - 2, lastPage, step);
    }
  };

  useEffect(() => {
    setActivePage(1);
    setLastPage(Math.ceil((totalOrders === 0 ? 1 : totalOrders) / limit));
    setPickedPages(createArrayBasedOnActivePage(activePage, lastPage));
  }, [totalOrders, lastPage]);

  const handleClickButton = (pageNumber) => {
    setActivePage(pageNumber);

    const oldParams = Object.fromEntries([...searchParams.entries()]);
    setSearchParams({ ...oldParams, page: pageNumber, limit });
    setPickedPages(createArrayBasedOnActivePage(pageNumber, lastPage));
  };

  return (
    <Wrapper>
      <PagesList>
        <PagesListItem>
          <PageButton
            disabled={activePage === 1}
            onClick={() => handleClickButton(1)}
          >
            <IconLeft />
          </PageButton>
        </PagesListItem>
        {activePage > 2 && (
          <>
            <PagesListItem>
              <PageButton
                $active={activePage === 1}
                disabled={activePage === 1}
                onClick={() => handleClickButton(1)}
              >
                1
              </PageButton>
            </PagesListItem>
            <PagesListItem>
              <Dots>. . .</Dots>
            </PagesListItem>
          </>
        )}

        {pickedPages.map((item, idx) => (
          <PagesListItem key={idx}>
            <PageButton
              $active={item === activePage}
              disabled={item === activePage}
              onClick={() => handleClickButton(item)}
            >
              {item}
            </PageButton>
          </PagesListItem>
        ))}

        {lastPage > 3 && lastPage - activePage > 1 && (
          <>
            <PagesListItem>
              <Dots>. . .</Dots>
            </PagesListItem>
            <PagesListItem>
              <PageButton
                $active={activePage === lastPage}
                disabled={activePage === lastPage}
                onClick={() => handleClickButton(lastPage)}
              >
                {lastPage}
              </PageButton>
            </PagesListItem>
          </>
        )}
        <PagesListItem>
          <PageButton
            disabled={activePage === lastPage}
            onClick={() => handleClickButton(lastPage)}
          >
            <IconRight />
          </PageButton>
        </PagesListItem>
      </PagesList>
    </Wrapper>
  );
};
