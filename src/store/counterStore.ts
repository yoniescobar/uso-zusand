import create from "zustand";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface CounterState {
  count: number;
  title: string;
  increment: (value: number) => void;
  posts: Post[];
  getPosts: () => Promise<void>;
  clearStore: () => void;
  multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 10,

  title: "Titulo desde desde Store ",

  increment: (value: number) =>
    set((state) => ({
      count: state.count + value, // state.count = 10 + value(10) = 20
    })),

  posts: [], //inicilizar con el array vacio para hacer el fetch

  getPosts: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(" --- posts ---", posts);

    set((state) => ({
      ...state, //copiar lo que tiene y luego actualizr el posts
      posts,
    }));
  },

  // limpia el estado de todo el state
  clearStore: () => {
    set({}, true);
  },

  multiply: (value: number) => {
    const { count } = get(); // valor de data
    set({ count: count * value });
  },
}));
