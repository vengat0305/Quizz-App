import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Home = () => {
  const [learn, setLearn] = useState(false);
  const handleLearn = () => {
    setLearn(true);
    setTimeout(() => {
      navigate("/");
      setLearn(false);
    }, 4000);
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/quiz");
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="lg:w-9/12 px-5 flex flex-col  md:w-[90%] sm:p-4 mx-auto mt-12  justify-between items-center md:flex-row-reverse pl-2  py-3 border border-[#010101] rounded-xl shadow-xl  hover:bg-[#fffbf6] hover:text-[#ffffff] transition-all duration-300 ease-in ">
      {loading && <Loading />}

      <div className="md:w-1/2 w-full ">
        <img
          className="w-full mx-auto "
          src="/images/Questions-cuate.png"
          alt="img"
        />
      </div>
      {/* home content */}
      <div className="space-y-3 md:w-1/2 w-full">
        <h1 className="my-5 text-3xl font-bold text-[#8e6600]  break-words font-display lg:text-5xl md:w-6/6 sm:text-4xl lg:leading-normal tracking-wider ">
          LEARN <b className="text-[#979797]">'NEW THINGS'</b> FOR EACH QUESTION'S?
        </h1>
        <p className="py-2 mb-6 text-[#8f5800] font-display font-thin tracking-wider pl-2   ">
          Creating a quiz app can be a fun and educational project. Here are
          some details you might want to consider when developing, We Help You
          Prepare For Interview and Exams..
        </p>
        <div className="space-x-3 sm:mb-5">
          <button
            onClick={handleStart}
            className="font-bold tracking-tight px-5 py-1 border border-[#8e6600] bg-[#fff3e5] font-display  text-[#8f5800]  shadow-lg rounded-sm hover:bg-[#543d02] hover:text-[#ffffff] hover:animate-none transition-all duration-300 ease-in animate-pulse "
          >
            Starts Quizz
          </button>

          <button
            onClick={handleLearn}
            className="font-medium px-5 py-1 border border-[#8e6600] shadow-md  font-display  text-[#8f5800] hover:bg-[#543d02] hover:text-[#ffffff] hover:animate-none transition-all duration-300 ease-in rounded-sm"
          >
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </button>
          {learn && (
            <div className="p-5  fixed top-0 left-0 max-w-max h-full flex items-center justify-center  bg-opacity-20 backdrop-filter backdrop-blur-sm z-50 xl:pl-[20rem] xl:w-[80%] lg:w-[100%] md:w-[100%]  ">
              <p className="py-2 md:text-[10px] text-xs font-thin mb-6 text-[#838383] bg-[#ffffff] tracking-wider  border-4 border-double border-[#a75900] text-left font-display  p-2 mt-5 pl-5 leading-normal shadow-lg  ">
                {" "}
                <h1 className="font-bold font-display text-4xl text-[#9c5908]">
                  Learn More!
                </h1>
                <b className="font-bold">
                  Creating a quiz app can be a fun and educational project. Here
                  are some details you might want to consider when developing
                </b>{" "}
                <br></br>
                <b className="text-xl text-[#000000]">quiz app:</b> Target
                Audience: Define who your app is for. Is it for students, trivia
                enthusiasts, professionals, or a general audience? <br></br>
                <b className="text-xl text-[#000000]">Topic Selection:</b>{" "}
                Decide on the topics for your quizzes. You can have quizzes on
                various subjects such as science, history, literature, movies,
                sports, or even niche topics like computer programming languages
                or culinary arts.<br></br>{" "}
                <b className="text-xl text-[#000000]">Question Database:</b>
                Create a database of questions for each topic. Ensure the
                questions are accurate, well-researched, and cover a range of
                difficulties to cater to different skill levels. User
                <br></br>
                <b className="text-xl text-[#000000]">Authentication:</b>
                Decide whether users will need to create accounts or if they can
                use the app anonymously. User accounts can allow for features
                like tracking progress, saving scores, and competing with
                friends.<br></br>
                <b className="text-xl text-[#000000]">User Interface:</b>
                Design an intuitive and visually appealing user interface for
                your app. Make it easy for users to navigate between quizzes,
                view questions, and submit answers. <br></br>
                <b className="text-xl text-[#000000]">Feedback Mechanism:</b>
                Provide feedback to users on their quiz performance. This could
                include displaying correct answers after each question, showing
                overall scores at the end of the quiz, and offering explanations
                for correct answers.<br></br>
                <b className="text-xl text-[#000000]">
                  Leaderboards and Rankings:{" "}
                </b>
                Implement leaderboards to showcase top scorers and encourage
                competition among users. This can add a social element to the
                app and motivate users to improve their scores.
                <br></br>
                <b className="text-xl text-[#000000]">Customization Options:</b>
                Allow users to customize their quiz experience. This could
                include options to select quiz difficulty, choose specific
                topics, or set time limits for quizzes.
                <br></br>
                <b className="text-xl text-[#000000]">Offline Access:</b>
                Consider whether users will be able to access quizzes offline or
                if an internet connection is required. Offline access can be
                useful for users in areas with limited connectivity.
                Accessibility: Ensure your app is accessible to users with
                disabilities. This may involve implementing features like screen
                reader compatibility, adjustable font sizes, and color contrast
                options.
                <br></br>
                <b className="text-xl text-[#000000]">
                  Testing and Feedback:{" "}
                </b>{" "}
                Test your app extensively to identify and fix any bugs or
                usability issues. Gather feedback from beta testers to improve
                the user experience before releasing the app to the public.
                {/* <button> Close{navigate("/")}</button> */}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Home;
