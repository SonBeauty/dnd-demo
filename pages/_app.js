import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "../components/SideNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.apps}>
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
        <div className={styles.pages}>
          <Component {...pageProps} />
        </div>
      </DndProvider>
    </div>
  );
}

export default MyApp;
