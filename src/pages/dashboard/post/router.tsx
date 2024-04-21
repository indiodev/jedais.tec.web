import { Route, Routes } from "react-router-dom";

import { Create } from "./create";
import { Edit } from "./edit";

import { Post } from "./";

export function Router(): React.ReactElement {
  return (
    <Routes>
      <Route index element={<Post />} />
      <Route path="/create" element={<Create />} />
      <Route path="/:id/edit" element={<Edit />} />
    </Routes>
  );
}
