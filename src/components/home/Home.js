import React from "react";
import HomeCss from "./Home.module.css";
import GetStartButton from "../Buttons/GetStartButton";
import WhiteButton from "../Buttons/WhiteButton";
const Home = function() {
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
            <GetStartButton value={"Get Started"}/>
            <WhiteButton value={"See how it works"}/>
          </div>
        </div>

        <div className={HomeCss.fg}>

        </div>
      </section>
    </article>
  );
};

export default Home;