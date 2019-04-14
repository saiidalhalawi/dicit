const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: true
    },
    NODE_ENV: "test"
  },
  setupFilesAfterEnv: [`${__dirname}/src/setupTest.ts`],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  moduleNameMapper
};
