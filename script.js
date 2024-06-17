function firstChar(text) {
    // Check if the string is empty or only contains spaces
    if (!text.trim()) {
        return '';
    }

    // Iterate through the string until finding a non-space character
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i)!== ' ') {
            return text.charAt(i);
        }
    }

    // This line should never be reached since we return on the first non-space character found
    return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));



