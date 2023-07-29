module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["@d4comm/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
