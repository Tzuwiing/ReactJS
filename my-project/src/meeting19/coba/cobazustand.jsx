import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const Counterzus = () => {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <p>Angka : {count}</p>
      <button onClick={increment}>Tambah </button>
      <button onClick={decrement}>Kurangi </button>
    </div>
  );
};

export default Counterzus;
