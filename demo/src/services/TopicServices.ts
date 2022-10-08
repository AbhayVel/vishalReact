

export class TopicService {

    getAll() {
  //      return new Promise((res, rej) => {

		//})
        return [
            {
                id: 2,
                subjectId: 1,
                type: "Question",
                question: "What is react",
                answer: "React is a UI rendring library available for javascript."
            },
            {
                id: 1,
                subjectId: 2,
                type: "Question",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 3,
                subjectId: 3,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 4,
                subjectId: 3,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 5,
                subjectId: 1,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 6,
                subjectId: 2,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 7,
                subjectId: 3,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 8,
                subjectId: 3,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 9,
                subjectId: 3,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript."
            },
            {
                id: 10,
                subjectId: 4,
                type: "Topic",
                question: "What is Angular",
                answer: "Angular is a UI framework for javascript.",
                answer2: "Angular is a UI framework for javascript.",
                answer3: "Angular is a UI framework for javascript.",
                answer4: "Angular is a UI framework for javascript.",
                answer5: "Angular is a UI framework for javascript.",
            },

        ]
	}

	getById() {

	}

	save() {

	}

	delete() {

	}

}