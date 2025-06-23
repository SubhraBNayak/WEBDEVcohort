/*
    This is a program that uses readfile and commander dependencies to count the number of words in a file
    We will create a CLI
    User will need to specify the file path and we will get'em the result
*/

const fs = require('fs');
const { Command } = require('commander');
const program = new Command()
program
    .name('words_counter')
    .version('1.0.0')
    .description('cli to count number of words in a given file')

program
    .command('count')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', (err, data) =>{
            if (err){
                console.log(`ERROR reading the file : words_counter`)
                return
            }else {
                const word_count = data.replace(/[^\w\s]/g,'').trim().split (/\s+/).filter(word => word.length > 0).length
                console.log(`file contains ${word_count} words`)
            }
        })
    })

program.parse(process.argv);

// THIS IS A MORE LOW LEVEL LOGIC, THAT GOES TO THE ROOTS OF COUNTING NUMBER OF WORDS IN A GIVEN STRING
    // while( index < data.length ){
    //     if (data[index] != " "){
    //         index++;
    //     }
    //     else if (data[index] == " " &&  data[index-1] != " "){
    //         counter++;
    //         index++;
    //     }
    //     else{
    //         index++;
    //     }
    // }