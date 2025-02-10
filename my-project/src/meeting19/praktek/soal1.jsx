import { create } from "zustand";
import { motion } from "framer-motion";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
}));

const Countercafe = () => {
  const { count, increment, decrement } = useStore();

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-96 p-6 shadow-2xl bg-white rounded-2xl text-center border border-gray-300"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pelanggan: {count}
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#34D399" }}
            whileTap={{ scale: 0.95 }}
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg transition duration-150 ease-in-out"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Tambah pelanggan
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#F87171" }}
            whileTap={{ scale: 0.95 }}
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg transition duration-150 ease-in-out"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            disabled={count === 0}
          >
            Kurangi pelanggan
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Countercafe;
