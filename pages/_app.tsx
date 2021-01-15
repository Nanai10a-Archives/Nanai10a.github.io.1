import React, { PropsWithChildren } from "react";
import * as Next from "next/app";

import "../styles/_app.scss";

const App: React.FC<Next.AppProps> = (
  props: PropsWithChildren<Next.AppProps>,
): React.ReactElement => {
  return (
    <>
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
