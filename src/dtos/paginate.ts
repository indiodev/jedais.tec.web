import type { Meta } from "./meta";

export type Paginate<T> = {
  meta: Meta;
  data: T;
};
