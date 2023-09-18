import got, { Options } from 'got';

const defaultOptions = new Options({
    // prefixUrl: https://exampleBaseUrlReadFromEnv,
    headers: {
        'content-type': 'application/json',
    },
});

export const request = async (url, { method, searchParams } = {}) => {
    const response = await got(url, {
        method,
        searchParams,
    }).json();
    return response;
};
