import React from "react";
import styles from "../styles/Home.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <div className={styles.center}>
          <div className={styles.image}>
            <img
              width="30px"
              height="30px"
              src="https://links-api.hls-dev.asia/admin/15026a3d58aeb2828134.png"
            ></img>
          </div>
          <div className={styles.title_1}>
            <span className={styles.title_text}>
              Strapi Dashboard
              <span className={styles.Workplace}>Workplace</span>
            </span>
            <p className={styles.Workplace_1}>Workplace</p>
          </div>
        </div>
        <hr className={styles.bottom} />
        <div className={styles.list}>
          <ul className={styles.list_1}>
            <li>
              <a href="/" className={styles.link}>
                <span className={styles.list_2}>
                  <div>
                    <span></span>
                    <span>Content Manager</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <div>
                <span>
                  <span>Plugins</span>
                </span>
                <ul>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>Content-Type Builder</span>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>Media Library</span>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>strapi-seed</span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <span>
                  <span>GENERAL</span>
                </span>
                <ul>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>Plugins</span>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>Marketplace</span>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span>
                      <div>
                        <span></span>
                        <span>Settings</span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
