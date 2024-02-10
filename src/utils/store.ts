import { create } from "zustand";

type User = {
  name: string;
  email: string;
};

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));
