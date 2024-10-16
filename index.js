
  // console.log(franc('Alle menslike wesens word vry')) //=> 'afr'
// franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট') //=> 'ben'
// franc('Alle menneske er fødde til fridom') //=> 'nno'
// console.log(franc('Je veux aller, mais il faut que je fasse mes devoirs'))
// console.log(franc('Меня зовут Мандл'))

const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const sentence = process.argv[2];
const langCode = franc(sentence);

if (langCode === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Our best guess is: ${language.name}`));
    } else {
        console.log(colors.red("Language not found!"));
    }
}
