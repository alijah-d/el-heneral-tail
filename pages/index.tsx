import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>El Heneral Beach House</title>
        <meta name="description" content="El Heneral Beach House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.overlay}></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/poster.png"
          className={styles.video}
        >
          <source src="/heneral_vid.mp4" type="video/mp4" />
          <source src="/heneral_vid.webm" type="video/webm" />
        </video>
        <div className={styles.content}>
          <img
            src="/el_heneral.png"
            alt="El Heneral Logo"
            width="580"
            height="580"
          />
          <Link href="/landing" passHref>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                BOOK NOW!
              </span>
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
