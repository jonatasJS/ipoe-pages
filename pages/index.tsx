import Head from "next/head";
import { useEffect, useState } from "react";

import LinkToDashboardIPOE from "../components/LinkToDashboardIPOE";

import {
  monitoramento,
  monitoramento_ipoe,
  servidores_wmare,
} from "../data/fakeApi.json";

import styles from "../styles/Home.module.css";

// interface InnerDataTypes {
//   title: string;
//   url: string;
// }

// interface DataTypes {
//   monitoramento_ipoe: InnerDataTypes[];
//   servidores_wmare: InnerDataTypes[];
//   monitoramento: InnerDataTypes[];
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>SERVIÇOS DISPONÍVEIS:</h1>
        <div className={styles.main}>
          <div className={styles.item}>
            <h2>MONITORAMENTO IPOE</h2>
            <div className={styles.links}>
              {monitoramento_ipoe.map((value, i) => {
                return (
                  <p key={i}>
                    <LinkToDashboardIPOE isTargetBlank url={value.url}>
                      {value.title}
                    </LinkToDashboardIPOE>
                  </p>
                );
              })}
            </div>
          </div>

          <div className={styles.item}>
            <h2>SERVIDORES WMARE</h2>
            <div className={styles.links}>
              {servidores_wmare.map((value, i) => (
                <p key={i}>
                  <LinkToDashboardIPOE isTargetBlank url={value.url}>
                    {value.title}
                  </LinkToDashboardIPOE>
                </p>
              ))}
            </div>
          </div>

          <div className={styles.item}>
            <h2>MONITORAMENTO</h2>
            <div className={styles.links}>
              {monitoramento.map((value, i) => {
                return (
                  <p key={i}>
                    <LinkToDashboardIPOE isTargetBlank url={value.url}>
                      {value.title}
                    </LinkToDashboardIPOE>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
