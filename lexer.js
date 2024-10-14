function lexer(input) {
    const tokens = [];
    const regex = /\s*(put|show|PLUS|MINUS|TIMES|DIVIDED_BY|MODULO|[0-9]+|".*?"|[a-zA-Z_][a-zA-Z0-9_]*|[-+*/=();])\s*/g;

    let match;
    while (match = regex.exec(input)) {
        tokens.push(match[1]);
    }

    console.log('Tokens:', tokens);  // Debug log to show generated tokens
    return tokens;
}

module.exports = lexer;
