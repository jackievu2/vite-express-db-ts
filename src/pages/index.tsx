import { useState } from "react";
import styles from "./index.module.css";

const HomePage = (): JSX.Element => {
  const urlWithProxy = `/api/v1/version`;
  const [data, setData] = useState<RespExampleType | null>(null);
  const [databaseData, setDatabaseData] = useState<string>("");

  async function getDataFromServer(): Promise<void> {
    const res = await fetch(urlWithProxy);
    const data: RespExampleType = await res.json();
    setData(data);
  }

  // get dataabse data
  (async () => {
    const res = await fetch("/api/v1/database");
    setDatabaseData(await res.json());
  })();

  return (
    <div className={styles.app}>
      <img src="/images/nasa-logo.svg" alt="nasa logo" />
      <button className={styles.button} onClick={getDataFromServer}>
        Access server using proxy
      </button>
      <p>data : {data?.version}</p>
      <div>{databaseData}</div>
    </div>
  );
};

export default HomePage;
