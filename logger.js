function log(eq, res, next) {
    console.log('Logging...');
    next();
}

module.exports = log;