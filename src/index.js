#!/usr/bin/env node

const readline = require('readline');
const arg = require('arg');

const options = arg(
    {
        '--message': String
    },
    {
        permissive: true
    }
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stderr
});

let message = options['--message'];
if(! /\s+$/.test(message)) {
    message = `${message} `;
}

const style = s => `\u001B[${s}m`;

const reset = style(0);
const bold = style(1);
const green = style(32);

message = `${green}?${reset} ${bold}${message}${reset}`

rl.question(message, answer => {
    process.stdout.write(answer);
    rl.close();
});