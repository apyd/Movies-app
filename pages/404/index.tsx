import classNames from "classnames/bind";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "../../src/components/UI/Button/Button";
import { Logo } from "../../src/components/UI/Logo/Logo";
import styles from "./404.module.scss";

const cx = classNames.bind(styles);

export default function Custom404() {
  const router = useRouter();

  const navigateToSearch = () => {
    router.push("/search");
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>404 - Page not found</title>
          <meta name="description" content="Movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <section className={cx("not-found")}>
        <Logo />
        <h3>404 - Page not found</h3>
        <p>Oops... looks like this page doesn't exist</p>
        <Button onClick={navigateToSearch}>Go back to home page</Button>
      </section>
    </>
  );
}
