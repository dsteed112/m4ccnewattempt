import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {

  state = {
    botCollection: [],
    botArmy: [],
  }

  componentDidMount() {
    fetch ("http://localhost:6001/bots")
      .then(response => response.json())
      .then(data => this.setState({ botCollection: data }))
  }

  addBotToArmy = (bot) => {
    if (!this.state.botArmy.find(currentArmyBot => currentArmyBot.id === bot.id)) { 
        this.setState({ botArmy: [...this.state.botArmy, bot] })
    }
  }

  removeBotFromArmy = (bot) => {
        let newArmy = this.state.botArmy.filter(card => card.id !== bot.id)
        this.setState({ botArmy: newArmy })
    }

  render() {
    return <div>
      <YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>
      <BotCollection botCollection={this.state.botCollection} action={this.addBotToArmy}/>
      
    </div>;
  }
}

export default BotsPage;
