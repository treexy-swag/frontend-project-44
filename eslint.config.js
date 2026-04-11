import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { 
      // Добавляет глобальные переменные Node.js (console, process и т.д.)
      globals: globals.node 
    }
  },
  pluginJs.configs.recommended,
];
