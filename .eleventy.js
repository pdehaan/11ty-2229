module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", require("node:util").inspect);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictVariables: false,
    strictFilters: false,
    jekyllInclude: true
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
