import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setResult] = useState(false);
  const [score, setScore] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/quiz.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching quiz data:", error));

    const intervalId = setInterval(() => {
      setTimer((preTimer) => {
        preTimer - 1;
      });
    }, 3000);
    setTimerIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
      if (timer <= 0) {
        alert("Time Is Out");
      }
    };
  }, [timer]);

  const handleAnswer = (questionId, selectOption) => {
    // console.log(questionId);
    // console.log(selectOption);
    const updateAnswer = { ...answers, [questionId]: selectOption };
    setAnswers(updateAnswer);
    // console.log(updateAnswer);
  };

  const handleSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    clearInterval(timerIntervalId);

    setTimeout(() => {
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = (quizScore / questions.length) * 100;
      console.log(percentage);
      const newStatus = percentage >= 50 ? " Passed" : "Failed";
      setStatus(newStatus);
      setResult(true);
      setLoading(false);
    }, 4000);
  };

  const calculateScore = (userAnswers) => {
    const correctAnswers = questions.map((question) => question.answer);
    let score = 0;
    for (const questionId in userAnswers) {
      if (userAnswers[questionId] === correctAnswers[questionId - 1]) {
        score++;
      }
    }
    return score;
  };
  // restart btn
  const restartQuiz = () => {
    setAnswers({});
    setScore(0);
    setResult(false);
    setLoading(false);
    setTimer(60);
    navigate("/quiz");
  };
  return (
    <section>
      <div className="w-full flex items-center justify-center  gap-5 border border-gray-400 p-2 rounded-sm shadow-xl bg-[#fff8f1]  ">
        <p className="font-bold font-display tracking-wider text-xl text-center ">
          - YOUR RESULT Below here wait few seconds -
        </p>
      </div>
      <div className=" w-full p-4 ">
        {showResults && (
          <div className="flex items-center justify-center  gap-5 border border-gray-400 p-2 rounded-sm shadow-xl bg-[#fff8f1]">
            <div className="flex flex-col items-center justify-center p-2 gap-5">
              <h2 className="text-xl font-bold font-display">Your Score :</h2>
              <h3
                className={`text-xl ${
                  status === "Passed" ? "text-green-600" : "text-red-600"
                } font-display tracking-wider animate-pulse font-bold `}
              >
                {status}
              </h3>
              <h1 className="text-2xl font-bold my-2 flex items-center justify-center ">
                {score * 10} <span className="font-display text-xl ">/60</span>
              </h1>
              <p className="font-display border border-gray-200 p-2 rounded-sm text-sm">
                Total Time :{" "}
                <span className="text-xl text-[#ea0000]">1 : Min </span>
              </p>
              <button
                onClick={restartQuiz}
                className="font-display border-2 bg-[#ffc388] p-3  font-bold m-2 xl:w-[68rem] lg:p-3 lg:w-[46rem] md:w-[34rem] rounded shadow-md  hover:bg-[#a65e00] hover:text-[#ffffff] transition-all duration-300 ease-in tracking-wider "
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="md:w-9/12 w-[90%] mx-auto">
        <div className="md:w=[70%] w-full mb-10">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="m-3 py-3 px-4 shadow-sm rounded border border-gray-200"
            >
              <p className="flex items-center rounded text-xs p-2 cursor-pointer font-display  gap-3 ">
                <span className=" border-2 bg-[#ffc388] p-3 rounded font-bold block">
                  {index + 1}
                </span>
                {question.question}
              </p>
              {/* options */}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5  ">
                {question.options.map((option, index) => (
                  <div
                    onClick={() => handleAnswer(question.id, option)}
                    key={index}
                    className={`border border-gray-200 rounded text-sm cursor-pointer pl-2 font-display py-2 ${
                      answers[question.id] === option ? "bg-gray-300" : ""
                    } `}
                  >
                    <p className="text-[10px] font-display mb-1">
                      Option {index + 1}
                    </p>
                    <p>{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className=" font-display border-2 bg-[#ffc388] p-3  font-bold m-2 xl:w-[70rem] lg:p-3 lg:w-[47rem] md:w-[35rem] rounded shadow-md  hover:bg-[#a65e00] hover:text-[#ffffff] transition-all duration-300 ease-in tracking-wider  "
          >
            {" "}
            Submit Answer{" "}
          </button>
        </div>
        {/* Answers */}
        {/* md:w-[30%] */}
      </div>
    </section>
  );
};

export default StartQuiz;
