const whitelists = [
    'http://localhost:3000',
    'http://127.0.0.1:5500',
    "https:/api-zaiko-dejeloper.vercel.app",
];


const options = {
    origin: (origin: string, callback: any) => {
        if (whitelists.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    }
}

export default options;