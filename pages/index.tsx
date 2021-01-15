import React from "react";
import * as Next from "next";
import Link from "next/link";

import styles from "../styles/index.module.scss";

const pages: Array<{ href: string; description: string }> = [
  { href: "/", description: "index" },
  { href: "/hobby", description: "fav" },
  { href: "", description: "" },
];

type IndexProps = Record<string, never>;

const Index = (props: React.PropsWithChildren<IndexProps>): React.ReactElement => {
  const currentPath = "/";

  return (
    <header>
      <div className={styles.header}>
        <img className={styles.logo} alt={"Logo"} src={"/logo.png"} width={512} height={202} />
        <div className={styles.menu_container}>
          {/* TODO: containerの中央に右向きの矢印(">" みたいな)つけて装飾したいわね */}
          <div className={styles.menu_drawer}>
            <div className={styles.menu_title}>on: {currentPath}</div>
            {pages.map((value, index) => {
              return (
                <Link href={value.href} key={index}>
                  {`${value.description}("${value.href}");`}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Index;

// noinspection JSUnusedGlobalSymbols
export const getStaticProps: Next.GetStaticProps<IndexProps> = async (): Promise<{
  props: IndexProps;
}> => {
  return {
    props: {},
  };
};
