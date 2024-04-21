import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { ResponseLogin } from "@/dtos/auth";
import { API } from "@/lib/api";

type Auth = {
  data: Partial<ResponseLogin>;
  clear: () => void;
  login: (data: ResponseLogin) => void;
  load: () => void;
};

export const useAuth = create<Auth>()(
  persist(
    (set, get) => ({
      data: {
        token: undefined,
        role: undefined,
      },

      login(data: ResponseLogin): void {
        API.defaults.headers.common.Authorization = `Bearer ${data.token}`;

        set((state) => ({
          ...state,
          data: {
            ...state.data,
            token: data.token,
            role: data.role,
          },
        }));
      },
      clear(): void {
        set((state) => ({
          ...state,
          data: { ...state.data, token: undefined, role: undefined },
        }));
      },
      load(): void {
        const token = get().data.token;

        if (!token) return;

        if (token) {
          API.defaults.headers.common.Authorization = `Bearer ${token}`;
        }
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
