module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 2%", "Last 2 versions"]
        }
      }
    ],
    "@babel/preset-react"
  ]
};
