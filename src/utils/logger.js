import { createLogger, format, transports } from 'winston';

const { combine, printf } = format;

const myFormat = printf(
    ({ level, message, timestamp }) => `[ ${level.toUpperCase()} ] ${timestamp} : ${message}`
);

export const logger = createLogger({
    format: combine(format.timestamp(), myFormat),
    transports: [new transports.Console()],
});
