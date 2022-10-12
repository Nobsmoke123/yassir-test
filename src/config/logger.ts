import winston, { format } from 'winston';

const customLevels = {
  levels: {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warning: 4,
    notice: 5,
    info: 6,
    debug: 7,
  },

  colors: {
    notice: 'blue blackBG',
    info: 'green blackBG',
    alert: 'yellow blackBG',
    error: 'red blackBG',
  },
};

winston.addColors(customLevels.colors);

export const Logger = winston.createLogger({
  levels: customLevels.levels,
  format: winston.format.combine(
    format.colorize(),
    format.splat(),
    format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
  ],
});
