import React,{useEffect} from "react";
import HomeCss from "./Home.module.css";
import GetStartButton from "../Buttons/GetStartButton";
import WhiteButton from "../Buttons/WhiteButton";
import { useLayoutEffect ,useState} from "react";
const Home = function() {
  const [counter,setCounter] = useState(0)
  useEffect(()=>{
    //you can remove strict mode wrapping to run it once in development mode
    console.log("In Development ?it will be printed twice - Inside Use Effect : printed once");
  },[counter])
  // useLayoutEffect(()=>{
  //   console.log("Inside Use Layout Effect");
  // })
  const testingHandler = ()=>{
    console.log("Inside Test")
    setCounter(counter+1)
  }
  return (
    <article>
      <section>
        <div className={HomeCss.article1}>
          <h1 className={HomeCss.head}>
            The best platform for cross-functional work
          </h1>
          <p>
            Want to drive efficiency across your organization? Asana is flexible
            and easy for all teams to use, so you can deliver quality work
            together, faster.
          </p>
          <div className={HomeCss.buttonSpaceing}>
            <GetStartButton onClick = {testingHandler} value={"Get Started"}/>
            <WhiteButton value={"See how it works"}/>
          </div>
        </div>

        <div className={HomeCss.fg}>
          Counter - {counter}
        </div>
  
      </section>
    </article>
  );
};

export default Home;