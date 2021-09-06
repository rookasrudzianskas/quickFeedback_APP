import pino from 'pino';
import { logflarePinoVercel } from 'pino-logflare';

const { stream, send } = logflarePinoVercel({
    apiKey: "Dw1EIg0-hS1B",
    sourceToken: "c60c1d14-39fa-407a-ac95-d99b2c8ce4dc"
});

const logger = pino(
    {
        browser: {
            transmit: {
                send: send
            }
        },
        level: 'debug',
        base: {
            env: process.env.NODE_ENV || 'ENV not set',
            revision: process.env.VERCEL_GITHUB_COMMIT_SHA
        }
    },
    stream
);

const formatObjectKeys = (headers) => {
    const keyValues = {};

    Object.keys(headers).map((key) => {
        const newKey = key.replace(/-/g, '_');
        keyValues[newKey] = headers[key];
    });

    return keyValues;
};

export { logger, formatObjectKeys };
