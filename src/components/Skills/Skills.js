import skill1 from "../../assets/ui-design.png";
import skill2 from "../../assets/website-design.png";
import skill3 from "../../assets/app-design.png";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skillsTitle">What I do</h1>
      <p className="skillsDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, JavaScript, ReactJS as well as design software such as Figma.
      </p>
      <div className="skillsBars">
        <div className="skillsBar">
          <img src={skill1} alt="ui-design" className="skillImg" />
          <div className="skillsText">
            <h2>UI/UX design</h2>
            <p>Crafting intuitive interfaces for seamless user experiences.</p>
          </div>
        </div>
        <div className="skillsBar">
          <img src={skill2} alt="website-design" className="skillImg" />
          <div className="skillsText">
            <h2>Website design</h2>
            <p>
              Creating captivating websites that communicate brand identity and
              drive engagement.
            </p>
          </div>
        </div>
        <div className="skillsBar">
          <img src={skill3} alt="app-design" className="skillImg" />
          <div className="skillsText">
            <h2>App design</h2>
            <p>
              Transforming ideas into elegant and user-centric mobile
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
