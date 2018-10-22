process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case 'ver':
                console.log(process.env);
            case 'Papayas':
                console.log('Mangoes and papayas are very tasty :) This is my case test');
            default:
                process.stderr.write('Wrong instruction! \n');
                break;
        }
    }
});