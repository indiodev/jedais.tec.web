import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { RootHeader } from "@/components/root-header";

export function Root(): React.ReactElement {
  return (
    <Fragment>
      <RootHeader />
      <Outlet />
    </Fragment>
  );
}
