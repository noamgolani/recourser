import React, {
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ResourceList } from "../components/ResourceList";
import { SiHotjar } from "react-icons/si";
import { FaSearch, FaPlus } from "react-icons/fa";

interface NavProps {
  leftIcon: React.ReactElement;
  rightIcon: React.ReactElement;
  centerIcon: React.ReactElement;
  onLeft: () => void;
  onRight: () => void;
  title: string;
}
const Nav: FC<NavProps> = ({
  leftIcon,
  rightIcon,
  centerIcon,
  onLeft,
  onRight,
  title,
}) => {
  return (
    <div className={`flex-between full-width`}>
      <div onClick={onLeft}>{leftIcon}</div>
      <div className="flex">
        {centerIcon}
        <h2>{title}</h2>
      </div>
      <div onClick={onRight}>{rightIcon}</div>
    </div>
  );
};

interface FlipperPage {
  element: ReactElement;
  icon: ReactElement;
  title: string;
}
interface BoxFlipperProps {
  pages: FlipperPage[];
  initialPage?: number;
}

const BoxFlipper: FC<BoxFlipperProps> = ({ pages, initialPage = 0 }) => {
  const pagesCount = pages.length;

  const [lastPage, setLastPage] = useState(initialPage + (1 % pagesCount));
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [front, setFront] = useState(false);

  const getIconsForIndex = useCallback(
    (index: number) => {
      return {
        left: pages[(pagesCount + index - 1) % pagesCount].icon,
        center: pages[index].icon,
        right: pages[(pagesCount + index + 1) % pagesCount].icon,
      };
    },
    [pages, pagesCount]
  );

  useEffect(() => {
    setFront((f) => !f);
  }, [currentPage]);

  return (
    <div className={`flip ${front ? "front" : "back"}`}>
      <div className="flipper">
        <div className={`box ${front ? "front" : "back"}`}>
          <Nav
            title={pages[currentPage].title}
            onLeft={() => {
              setCurrentPage((p) => (pagesCount + p - 1) % pagesCount);
            }}
            onRight={() => {
              setCurrentPage((p) => (p + 1) % pagesCount);
            }}
            leftIcon={getIconsForIndex(currentPage).left}
            centerIcon={getIconsForIndex(currentPage).center}
            rightIcon={getIconsForIndex(currentPage).right}
          ></Nav>
          {pages[currentPage].element}
        </div>
        <div className={`box ${!front ? "front" : "back"}`}>
          <Nav
            title={pages[lastPage].title}
            onLeft={() => {
              setCurrentPage((p) => (pagesCount + p - 1) % pagesCount);
            }}
            onRight={() => {
              setCurrentPage((p) => (p + 1) % pagesCount);
            }}
            leftIcon={getIconsForIndex(lastPage).left}
            centerIcon={getIconsForIndex(lastPage).center}
            rightIcon={getIconsForIndex(lastPage).right}
          ></Nav>
          {pages[lastPage].element}
        </div>
      </div>
    </div>
  );
};

const HomePage: FC = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Resourcer</h1>
        <p>
          Find and share your the perfect resource for learning the new best
          technology
        </p>
        <BoxFlipper
          pages={[
            {
              icon: <SiHotjar size={30} />,
              title: "Hot Resources",
              element: <ResourceList />,
            },
            {
              icon: <FaSearch size={30} />,
              title: "Search",
              element: <ResourceList />,
            },
            {
              icon: <FaPlus size={30} />,
              title: "Add Resource",
              element: <ResourceList />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
