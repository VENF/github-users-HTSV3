module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
      "^@pages(.*)$": "<rootDir>/pages$1",
      "^@components(.*)$": "<rootDir>/components$1",
      "^@services(.*)$": "<rootDir>/services$1",
      "^@hooks(.*)$": "<rootDir>/hooks$1",
      "^@themes(.*)$": "<rootDir>/themes$1",
      "^@utils(.*)$": "<rootDir>/utils$1",
    },
  }
  