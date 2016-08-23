// Version Number Increaser
exports.bump = (originalVers, Update) => {
  let major = originalVers.major;
  let minor = originalVers.minor;
  let patch = originalVers.patch;
  if (Update) {
    if (Update === 'major') {
      major += 1;
    }
    if (Update === 'minor') {
      minor += 1;
    }
    if (Update === 'patch') {
      major += 1;
      minor = 0;
      patch = 0;
    }
  } else {
    console.warn('Enter major, minor, or patch as a 2nd param');
  }
  console.log('New Version: ' + major + '.' + minor + '.' + patch);
};
