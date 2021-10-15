import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/logo.svg";
import SideLogo from "../public/H-icon-dark.svg";

export default function Home() {
  return (
    <>
      <div className={styles.side_logo}>
        <Image layout="fill" src={SideLogo} alt="Hacktoberfest 2021" />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Hacktoberfest 2021</title>
          <meta
            name="description"
            content="Hacktoberfest Pakistan by KhattakDev"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.logo}>
            <Image layout="fill" src={Logo} alt="Hacktoberfest 2021" />
          </div>
          <p className={styles.hero_desc}>
            Your Gateway to the Open Source Community
          </p>

          <p className={styles.desc}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more
          </p>

          <button className={[styles.button, styles.center].join(" ")}>
            Contributors list
          </button>
        </main>
      </div>
    </>
  );
}