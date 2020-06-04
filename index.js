const postcss = require("postcss");

module.exports = postcss.plugin("postcss-edgie", function edgie() {
  return function (root) {
    root.walkAtRules("edgie", (rule) => {
      rule.cloneAfter({
        name: "media",
        params:
          " screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",
      });

      rule.cloneAfter({
        name: "supports",
        params: " (-ms-ime-align:auto)",
      });

      rule.remove();
    });
  };
});
