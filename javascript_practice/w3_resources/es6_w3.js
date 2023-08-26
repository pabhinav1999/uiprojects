// 1.Write a JavaScript program to compare two objects to determine 
// if the first contains equivalent property values to the second one.


const matches = (source , secondObject) =>  Object.keys(source).every( key => secondObject.hasOwnProperty(key) && secondObject.key === source.key)


console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

// 2. Write a JavaScript program to copy a string to the clipboard.

const copyToClipBoard = (text) => {

    const textarea = document.createElement('textArea');
    textarea.value = text;

    document.body.appendChild(textarea);
    var htmltextArea = document.getElementsByTagName('textarea')[0];
    htmltextArea.select();
    
    navigator.clipboard.writeText(htmltextArea.value);
    document.body.removeChild(textarea);

}

// copyToClipBoard('Chandrayaan 3');

//Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.


const conv_csv_to_Array = (data,omitFirstRow= false, delimiter =',') => data.slice( omitFirstRow ? data.indexOf('\n') + 1 : 0).split('\n').map( str => str.split(delimiter));


console.log(conv_csv_to_Array('a,b\nc,d')); 
console.log(conv_csv_to_Array('a;b\nc;d', ';')); 
console.log(conv_csv_to_Array('head1,head2\na,b\nc,d'));

// [["a","b"],["c","d"]]
// [["a","b"],["c","d"]]
// [["a","b"],["c","d"]]

//Write a JavaScript program to convert a
//  comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

// console.log(CSV_to_JSON('col1,col2\na,b\nc,d')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
// console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';')); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

const csv_to_json = (data, delimiter = ',') => {
    const titleColumns = data.slice(0,data.indexOf('\n')).split(delimiter);
    return data.slice(data.indexOf('\n') + 1).split('\n').map( v => {
        const values = v.split(delimiter);
        return titleColumns.reduce( (obj , currvalue , currIndex) => (
            obj[currvalue] = values[currIndex],obj
        ), {} )
    })

}

console.log(csv_to_json('col1,col2\na,b\nc,d'));