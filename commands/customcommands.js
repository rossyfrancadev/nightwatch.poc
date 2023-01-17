module.exports = {
  command: function(selector, value) {
    return this
      .waitForElementVisible(selector)
      .sendKeys(selector, value);
  }
};