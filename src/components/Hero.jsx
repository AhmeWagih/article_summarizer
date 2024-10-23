import { logo2 } from "../assets";
const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/* start nav */}
      <div className="flex justify-between items-center w-full mb-4 mt-[-90px]">
        <img src={logo2} alt="Logo Image" className="w-64 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/AhmeWagih")}
        >
          Github
        </button>
      </div>
      {/* end nav */}
      <h1 className="head_text">
        {" "}
        Summarize Article with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumize, an open-source article sumarizer that
        transforms lengthy articles into clear and concise sumaries
      </h2>
    </div>
  );
};

export default Hero;