import React from 'react';
import Quiz from 'react-quiz-component';
import TestStyles from './Test.module.scss'

class Test extends React.Component {
    
    render() {
        const {items = [] } = this.props;

        const answerList = items.map(item => item.rus );

        let questions = items.reduce((acc, item) => {

            const randomAnswer = Math.ceil(Math.random() * 4) - 1;

            let answers = [
                answerList[Math.ceil(Math.random() * items.length) - 1],
                answerList[Math.ceil(Math.random() * items.length) - 1],
                answerList[Math.ceil(Math.random() * items.length) - 1],
                answerList[Math.ceil(Math.random() * items.length) - 1]
            ];

            answers[randomAnswer] = item.rus;

            return [...acc, {
                "question": item.eng,
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": answers,
                "correctAnswer": `${randomAnswer + 1}`,
            }]
        }, [])

  
        const quiz = {
            "appLocale": {
                "landingHeaderText": "",
                "question": "",
                "startQuizBtn": "Начать тест",
                "resultFilterAll": "Все",
                "resultFilterCorrect": "Правильно",
                "resultFilterIncorrect": "Неверно",
                "nextQuestionBtn": "Следующий",
                "resultPageHeaderText": "Вы ответили на <correctIndexLength> из <questionLength> слов."
            }, 
            "quizTitle": "Проверка знаний",
            "quizSynopsis": "Тест составлен на основе ващих добавленных карточек",
            "questions": questions
        }

        return (
        <div className = { TestStyles.container } >
            <Quiz quiz = {quiz} shuffle={true} />
        </div>

        )
    }
}



export default Test;