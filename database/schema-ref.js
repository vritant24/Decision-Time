/* Root Level Collections */
//https://firebase.google.com/docs/firestore/manage-data/structure-data

session: {  
    question: String,
    options: [
        String,
        ...
    ],
    votes: [
        Number,
        ...
    ],
    users: [
        String,
        ...
    ],
    total_votes: Number,
    completed: Boolean,
    winner: Number,
]

/*
* Client will listen to `completed` key for specific session ID. 
* On it turning true, it will end the session and request for the result
*/

