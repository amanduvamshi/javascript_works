const config = {
    server: {
        host: 'localhost',
        port:7000
    }
}

const { server: { host, port=3000 } } = config;
console.log(host); // localhost
console.log(port); // 3000