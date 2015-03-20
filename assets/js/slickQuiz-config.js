var quizJSON = {
    "info": {
        "name": "Class Diagram Quiz",
        "main": "<p>This short quiz is intended to help gauge your knowledge on UML principles and class modeling.</p>",
        "results": "The UML Review Quiz Results",
        "level1": "Nearly close to level of ll-Yeol Song, the pro of UML!",
        "level2":  "A Potential Analyst",
        "level3":  "A Drexel CCI Student",
        "level4":  "A Amature in UML",
        "level5":  "A Newcomer to UML"
    },
    "questions": [
        {
            "q": "Which of the following is a good example of a class name?",
            "a": [
                { "option": "_software", "correct": false },
                { "option": "is_active", "correct": false },
                { "option": "ComputerModel", "correct": true },
                { "option": "PC_Price", "correct": false }
            ],
            "correct": "<p><span>Correct.</span> ComputerModel is a good class name for it follows the upper camel case naming convention and the class name is a self-explanitory name.</p>",
            "incorrect": "<p><span>Incorrect.</span> Class names should follow the upper camel case naming convention and should have meaningful names.</p>"
        },
        {
            "q": "Abstract classes can be instantiated?",
            "a": [
                { "option": "True", "correct": false },
                { "option": "False", "correct": true },
            ],
            "correct": "<p><span>Correct</span> Abstract classes cannot be instantiated, therefore, there are no objects associated with abstract classes.</p>",
            "incorrect": "<p><span>Incorrect.</span> Abstract classes cannot be instantiated. However, subclasses of the abstract class can be instantiated.</p>"
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following are appropriate examples of composition?.",
            "a": [
                {"option": "Car - Passenger",           "correct": false},
                {"option": "Car - Engine",                  "correct": true},
                {"option": "Plane - Propeller",                  "correct": true},
                {"option": "Lab - Scientist",  "correct": false},
                {"option": "Bicycle - Chain",  "correct": true},
                {"option": "Building - Room",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius!</p>",
            "incorrect": "<p><span>Not Quite.</span>Remember, a composition are whole-part relationships where they cannot exist on their own.</p>" // no comma here
        },
        { // Question 4
            "q": "What is a good example of aggregation?",
            "a": [
                {"option": "Airplane - Passenger",    "correct": true},
                {"option": "Airplane - Landing Gear",     "correct": false},
                {"option": "Airplane - Wing",      "correct": false},
                {"option": "Airplane - Brakes",      "correct": false}
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Incorrect.</span> Note, an aggregation are whole-part relationships where it can exist on it's own.</p>" // no comma here
        },
        { // Question 5
            "q": "Which of the following images are a symbol that indicates generalization?",
            "a": [
                {"option": "<img src='assets/img/generalization.jpg'>",    "correct": true},
                {"option": "<img src='assets/img/association.jpg'>",     "correct": false},
                {"option": "<img src='assets/img/realization.jpg'>",     "correct": false},
                {"option": "<img src='assets/img/composition.jpg'>",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You know your UML.</p>",
            "incorrect": "<p><span>Hmm..not quite.</span> Try again.</p>"
        },
        { // Question 6
            "q": "A role is always the same as the class name.",
            "a": [
                { "option": "True", "correct": false },
                { "option": "False", "correct": true }
            ],
            "correct": "<p><span>Good Job!</span> You know your UML.</p>",
            "incorrect": "<p><span>Hmm..not quite.</span> Try again.</p>"
        },
        { // Question 7
            "q": "Which is the proper format of an attribute with a type?",
            "a": [
                { "option": "String : firstName", "correct": false },
                { "option": "String : FirstName", "correct": false },
                { "option": "FirstName : String", "correct": false },
                { "option": "firstName : String", "correct": true }
            ],
            "correct": "<p><span>Good Job!</span> You know your UML.</p>",
            "incorrect": "<p><span>Hmm..not quite.</span> Try again.</p>"
        }
    ]
};
