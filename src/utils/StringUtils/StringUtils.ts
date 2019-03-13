export const replaceAll = (inputString: string, searchValue: string, replaceValue: string) => {
    const regExp = new RegExp(searchValue, 'g');
    return inputString.replace(regExp, replaceValue);
}

export const normalizeStr = (str: string) => {
    const polishLetters = { "Ą": "A", "Ć": "C", "Ę": "E", "Ó": "O", "Ń": "N", "Ł": "L", "Ś": "S","Ź": "Z","Ż": "Z"," ": "", "\"": "*" };

    str = str.toUpperCase();
    for(const letter of Object.keys(polishLetters)){
        str = str.replace(new RegExp(letter, 'gi'),polishLetters[letter])
    }
    return str;
};