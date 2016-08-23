const colors = require('colors');

// set time stamp for logs
const ts = new Date();

const seperator = colors.magenta('\n=============\n');

// debug method
exports.debug = (data) => {
  const out1 = seperator + ts + '\n \n' + data + '\n \n' + seperator;

  // Log Event Streams
  if (process.env.DEBUG) {
    if (data === 'log') {
      const log = out1;
      console.log(log);
    } else if (data === 'error') {
      const error = out1;
      console.error(error);
    } else if (data === 'warn') {
      const warn = out1;
      console.warn(warn);
    } else {
      console.error(colors.red('Err!'));
    }
  }
};
