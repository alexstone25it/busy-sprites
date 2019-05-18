import React, { Component, Fragment } from "react";
import DivWrapperPlain from "../../../../components/wrappers/divs/divWrapperPlain/DivWrapperPlain";
import Specialism from "./specialism/Specialism";
import SkillPaper from "./skillPapers/SkillPaper";

class Specialisms extends Component {
  state = {
    hidden: true,
    skillSet: {}
  };
  addSkillSetHandler = item => {
    this.setState({
      skillSet: item,
      hidden: false
    });
  };
  minusSkillSetHandler = () => {
    this.setState({
      skillSet: {},
      hidden: true
    });
  };
  render() {
    const skillsArray = [
      {
        name: "Fruits",
        id: "fruits",
        skills: ["Apples", "Bananas", "Kiwis", "Oranges"]
      },
      {
        name: "Veggies",
        id: "veg",
        skills: ["Carrots", "Onions", "Parsnips"]
      },
      {
        name: "Numbers",
        id: "nums",
        skills: ["One", "Two", "Three", "Four", "Five"]
      },
      {
        name: "Sizes",
        id: "sizes",
        skills: ["Tiny", "Small", "Medium", "Big", "Huge"]
      },
      {
        name: "Homes",
        id: "homes",
        skills: ["Flat", "Semidetached", "Detached", "Mansion"]
      },
      {
        name: "Animals",
        id: "animals",
        skills: ["Sloth", "SlowLoris", "Cat", "Bear", "Horse", "Dog", "Rabbit"]
      }
    ];
    return (
      <DivWrapperPlain>
        {skillsArray.map(skill => (
          <Fragment key={skill.id}>
            <Specialism
              item={skill}
              addSkillSet={this.addSkillSetHandler}
              skillset={this.state.skillSet}
              minusSkillSet={this.minusSkillSetHandler}
            />
            {!this.state.hidden && skill.id === this.state.skillSet.id ? (
              <SkillPaper item={skill} skillset={this.state.skillSet} />
            ) : null}
          </Fragment>
        ))}
      </DivWrapperPlain>
    );
  }
}

export default Specialisms;
