import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  from: "./client/src/index.css", // 🔹 archivo base o cualquier CSS principal
  plugins: [tailwindcss, autoprefixer],
};
