const typeCommands = {
    type(element, value) {
      this.waitForElementVisible(element, 1000)
        .sendKeys(element,value);
      
      this.pause(1000);
  
    }
  };