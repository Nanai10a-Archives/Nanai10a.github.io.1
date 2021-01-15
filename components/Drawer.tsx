import React from "react";
import * as Material_UI from "@material-ui/core";
import clsx from "clsx";

export type DrawerProps = {
  lightweight: boolean;
};

const useStyle = Material_UI.makeStyles({
  list: {
    width: 250,
  },
});

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const is_iOS = React.useMemo<boolean>(() => {
    return process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }, []);

  const styles = useStyle();

  const [state, setState] = React.useState<boolean>(false);

  return (
    <>
      <Material_UI.Button
        onClick={(event) => {
          event.preventDefault();
          setState(!state);
        }}
      >
        open!
      </Material_UI.Button>
      <Material_UI.SwipeableDrawer
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
        disableBackdropTransition={!is_iOS || props.lightweight}
        disableDiscovery={is_iOS}
      >
        <div className={clsx(styles.list)}>hi.</div>
      </Material_UI.SwipeableDrawer>
    </>
  );
};

export default Drawer;
