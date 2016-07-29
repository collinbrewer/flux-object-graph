// Karma configuration
// Generated on Wed Jul 20 2016 12:51:55 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai',
      'sinon'
   ],


    // list of files / patterns to load in the browser
    files: [
      'tests/**',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'tests/unit/**/*.js': ['webpack', 'coverage'],
      'tests/**/*.js': ['webpack', 'sourcemap']
    },

    // optionally, configure the reporter
    coverageReporter: {

   },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

   //  mochaReporter: {
   //     output: 'minimal'
   //  },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'
   ],

   webpack: {
      devtool: 'inline-source-map',
      module: {
         loaders: [
            {
               test: /\.js(x)?/,
               loader: 'babel-loader',
               exclude: /node_modules/
            }
         ]
      },
      resolve: {
         extensions: ['', '.js']
      },
     externals: {
      //   'jsdom': 'window',
      //   'cheerio': 'window',
      //   'react/lib/ExecutionEnvironment': true,
      //   'react/lib/ReactContext': 'window'
      },
    },

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
   },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
