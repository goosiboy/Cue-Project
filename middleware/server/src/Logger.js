const winston = require('winston');
const Utils = require('./utils/Utils').utils;

class Logger {

    create(level) {
        let logLevel = Utils.notEmpty(level) ? level : 'info';
        return winston.createLogger({
            level: logLevel,
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
                new winston.transports.File({ filename: './logs/main.log' }),
            ],
        });
    }

};

module.exports = new Logger().create();