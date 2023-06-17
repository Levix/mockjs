import * as log4js from 'log4js';

const logger = log4js.getLogger();

const level = {
  info: log4js.levels.INFO,
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
}

export const info = (content: string) => {
  logger.level = level.info;
  logger.info(content);
};

export const warn = (content: string) => {
  logger.level = level.warn;
  logger.info(content);
}