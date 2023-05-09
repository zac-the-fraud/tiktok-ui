import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import imgs from "~/assets/images/index";

const cx = classNames.bind(styles);
function Header() {
  // console.log('look for module->default: ',imgs.logo);
  // console.log(imgs.logo);
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <img src={imgs.logo} alt="file not found" />
          </div>
          <div className={cx("search")}>
            <input placeholder="search for videos" spellCheck={false} />
            <button className = {cx('search-loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx("search-cancel")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={cx("actions")}></div>
        </div>
      </header>
    </>
  );
}
export default Header;
