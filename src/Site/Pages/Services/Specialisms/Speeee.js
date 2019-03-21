import React, { Component } from "react";
import Div from "../../../../containers/major/Div";
import Specialism from "./Specialism/Specialism";

class Specialisms extends Component {
  state = {
    hidden: true,
    currSkillSet: {},
    skillSetsShowing: []
  };
  addSkillSetHandler = e => item => {
    let sets = [...this.state.skillSetsShowing];
    if (this.state.skillSetsShowing.length < 1) {
      sets.unshift(e);
    } else {
      let ids = sets.map(item => item.id);
      let duplicate = ids.map(item => item === e.id);
      if (!duplicate.includes(true)) {
        sets.unshift(e);
      }
    }
    this.setState({
      hidden: false,
      currSkillSet: e,
      skillSetsShowing: sets
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
      <Div>
        {skillsArray.map(item => (
          <Specialism
            key={item.id}
            skill={item}
            hidden={this.state.hidden}
            addSkillSet={this.addSkillSetHandler}
            currSkillSet={this.state.currSkillSet}
            skillSetsShowing={this.state.skillSetsShowing}
          />
        ))}
      </Div>
    );
  }
}

export default Specialisms;
