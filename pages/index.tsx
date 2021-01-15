import React from "react";
import * as Next from "next";

type IndexProps = Record<string, never>;

const Index: React.FC<IndexProps> = (props: IndexProps): React.ReactElement => {
  return <React.Fragment />;
};

export const getStaticProps: Next.GetStaticProps<IndexProps> = async (): Promise<{
  props: IndexProps;
}> => {
  return { props: {} };
};

export default Index;
