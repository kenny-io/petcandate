const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:8888" : "http://localhost:8888";
