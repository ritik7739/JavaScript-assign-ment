let jsonApi= `{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "How did you make your friend rage?",
    "delivery": "I implemented a greek question mark in his JavaScript code.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 147,
    "safe": true,
    "lang": "en"
}`;

let api=JSON.parse(jsonApi);
console.log(api);

let student={
    name:"Ritik",
    age:24,
}

let jsonStudent=JSON.stringify(student);
console.log(jsonStudent);