// module.exports = {
//     "Go to black lives matter": function(browser){
//         browser.url("https://blacklivesmatter.com/")
//         browser.pause(1*3000)
//         browser.verify.visible("img[alt='Black Lives Matter']")
//         .sendKeys("input#input_29_2_3", "Rossywan")
//         .sendKeys("input#input_29_2_6", "França")
//         .sendKeys("input#input_29_1", "rossyfranca@gmail.com")
//         .sendKeys("input#input_29_3", "20766720")
//         browser.click("div.gform_footer.top_label", (result)=>{
//             this.assert.strictEqual(result.status,0)
//             console.log('Click result',result)
//         })
//         browser.pause(1*3000)
        
        
//     }


// }

describe('Go to Black lives matter site',function(){

    var forms = "input[id*='input']";
    var values = ["Rossywan", "França", "rossyfranca@gmail.com","20766720"]
    const homepage = browser.page.homepage();
    before(async () => homepage.navigate());

    it("test", ()=>{
      homepage.type("input#input_29_2_3", "Rossywan")
      homepage.customcommands("input#input_29_2_6", "França")
      .pause(1*3000)
    })

})

