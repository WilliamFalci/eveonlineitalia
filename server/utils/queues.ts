import Bull from "bull";

export const eveOnlineNewsQueue = new Bull("eveOnlineNewsQueue", { redis: { port: 6380, host: '127.0.0.1', password: 'Dark@redis91' } });