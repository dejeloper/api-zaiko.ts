const whitelists = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://api-zaiko-dejeloper.vercel.app",
];

interface CorsOptions {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow: boolean) => void
  ) => void;
}

const options: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelists.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"), false);
    }
  },
};

export default options;
