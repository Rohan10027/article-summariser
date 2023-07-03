import {logo} from "../assets";

const Hero = () => {
  return (
    <div className=" w-full p-0 m-0">
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz-logo" className="w-28 object-contain"/>
                <button type="button" onClick={()=> window.open('https://github.com/rohan10027/')} className="black_btn">
                    GitHub
                </button>
            </nav>
            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden"/>
                <span className="orange_gradient">
                    OpenAI Text Generation Summarisation
                </span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open source article summarizer that transforms lengthy articles into clear and concise summaries
            </h2>
            <div className="paragraph">
                <p>* Uses modern user interface</p>
                <p>* Connection to openAI's model</p>
                <p>* Integration of Redux toolkit</p>
                <p>* Copy to clipboard</p>
                <p>* Browser histoy storage</p>
            </div>  
        </header>
    </div>
    
  )
}

export default Hero