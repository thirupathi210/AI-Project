import React, { useState, useEffect } from 'react';

const Task5 = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          answer: q.correct_answer,
        }));
        setQuestions(formattedData);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].answer) {
      setShowScore(showScore + 1 );
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h2>Your Score is {showScore}/{questions.length}</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz Competition</h2>
      <h3>{questions[currentQuestion].question}</h3>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              display: 'block',
              margin: '10px auto',
              padding: '10px',
              backgroundColor: selectedAnswer === option ? 'lightblue' : '#1534cd',
            }}
          >
            {option}
          </button>
        ))}
        <div>
          {selectedAnswer && (
            <button onClick={handleNextQuestion} style={{ marginTop: '10px', padding: '10px' }}>
              Next Question
            </button>
          )}
        </div>
        <h4>Score: {showScore}</h4>
      </div>
    </div>
  );
};

export default Task5;