const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    transports:
        new transports.File({
            filename: 'logs/errors.log',
            format: format.json(
                format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        })
});