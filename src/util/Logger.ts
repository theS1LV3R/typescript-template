import winston from 'winston';

const transports = [];

transports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'HH:mm:ss.SSS' }),
      winston.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`;
      })
    ),
  })
);

const Logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL ?? 'debug',

  levels: {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    silly: 4,
    debug: 5,
  },

  transports,
});

export default Logger;
