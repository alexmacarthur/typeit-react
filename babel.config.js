const browsers = {
  default: ["> 2%", "Last 2 versions", "safari >=9", "not ie < 11"],
  modern: [
    "Edge >= 16",
    "Firefox >= 60",
    "Chrome >= 61",
    "Safari >= 11",
    "Opera >= 48"
  ]
};

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: browsers[process.env.BROWSER_TYPE]
        }
      }
    ],
    "@babel/preset-react"
  ]
};
