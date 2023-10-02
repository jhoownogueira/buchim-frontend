module.exports = {
  apps: [
    {
      name: "buchim-client",
      script: "npm",
      args: "run start",
      env: {
        PORT: 3000,
      },
      watch: true,
    },
  ],
};
