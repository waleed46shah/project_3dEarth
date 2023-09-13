import styles from "./page.module.scss";
import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "./components/smoothScroll";
import Projects from "./components/projects";
const Earth = dynamic(() => import("./components/earth"), {
  ssr: false,
  //Shows when the model is being loaded
  loading: () => <img src="/assets/placeholder.png"></img>,
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <Earth />
        <Projects/>
      </main>
    </SmoothScroll>
  );
}
