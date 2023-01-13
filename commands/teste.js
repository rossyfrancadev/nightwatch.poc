const searchCommands = {
    submit() {
      this.waitForElementVisible('@submitButton', 1000)
        .click('@submitButton');
      
      this.pause(1000);
  
      return this; // for command-chaining
    }
  };