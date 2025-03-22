const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    invertObject(dict){
        let result = {};
        for (let key in dict){
            result[dict[key]] = key;
        }
        return result;
    }

    highlightText(text){
        return `<span class="highlight">${text}</span>`;
    }

    translate(text, type, highlight=true){
        let dictionary, regex, regexKey;
        let translation = text;
        if ( text == undefined || type == undefined || type == '' ) {
            return { error: "Required field(s) missing" };
        } else if ( text == '' ) {
            return { error: "No text to translate" };
        } else if ( type != 'american-to-british' && type != 'british-to-american' ) {
            return { error: "Invalid value for locale field" };
        }
        
        if ( type == 'american-to-british' ) {
            dictionary = {
                ...americanOnly,
                ...americanToBritishSpelling,
                ...americanToBritishTitles,
                ":": "."
            }
        } else {
            dictionary = {
                ...britishOnly,
                ...this.invertObject(americanToBritishSpelling),
                ...this.invertObject(americanToBritishTitles),
            }
            if ( translation.includes(".") ) {
                translation = translation.replace(/(\d)\.(\d)/gi, "$1\:$2");
            }
        }

        for (let key in dictionary){
            regexKey = key.replace(/\./g, "\\.");
            regex = new RegExp(`([^A-Za-z\-]|^)${regexKey}([^A-Za-z\-])`, 'gi');
            
            if (highlight) {
                translation = translation.replace(regex , `$1${this.highlightText(dictionary[key], `highlight`)}$2`);
            } else {
                translation = translation.replace(regex , `$1${dictionary[key]}$2`);
            }
        }

        if ( translation == text ) {
            return { text, translation: "Everything looks good to me!" };
        } else {
            return { text, translation}
        }

    }
}

module.exports = Translator;