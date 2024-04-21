import { Route, Routes } from "react-router-dom";

import { Course } from "./";

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route index element={<Course />} />
      <Route path="/:id/edit" element={<Course />} />
    </Routes>
  );
}
