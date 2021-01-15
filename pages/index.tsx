import React from "react";
import * as Next from "next";
import * as Material_UI from "@material-ui/core";

type IndexProps = Record<string, never>;

const Index: React.FC<IndexProps> = (props: IndexProps): React.ReactElement => {
  return (
    <Material_UI.Button variant={"contained"} color={"primary"}>
      hi, Material-ui.
    </Material_UI.Button>
  );
};

export const getStaticProps: Next.GetStaticProps<IndexProps> = async (): Promise<{
  props: IndexProps;
}> => {
  return { props: {} };
};

export default Index;
