require('package-script').spawn([
    {
        command: "npm",
        args: ["install", "-g", "npm-check-updates"]
    },
    {
        command: "npm",
        args: ["install", "-g", "istanbul"]
    }
]);
