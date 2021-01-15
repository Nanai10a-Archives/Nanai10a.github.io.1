// from https://codepen.io/saransh/pen/BKJun 's haml to html.

import React from "react";

import "../styles/components/parallax_pixel_stars.scss";

type Parallax_Pixel_StarsProps = Record<string, never>;

// 使用時には最高位コンポーネントに配置してください
const Parallax_Pixel_Stars: React.FC<Parallax_Pixel_StarsProps> = (
  props: React.PropsWithChildren<Parallax_Pixel_StarsProps>,
) => {
  return (
    <>
      {props.children}
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
        type="text/css"
      />
      <div id={"small"} />
      <div id={"medium"} />
      <div id={"big"} />
      <div id={"title"}>
        <span>PURE CSS</span>
        <br />
        <span>PARALLAX PIXEL STARS</span>
      </div>
    </>
  );
};

export default Parallax_Pixel_Stars;
