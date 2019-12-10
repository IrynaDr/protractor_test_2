var MainPage = function () {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    this.elLogo = $('header .octicon-mark-github');
    
    this.txtSearch = $('.js-chromeless-input-container .js-jump-to-field');

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------
	
	this.fillSearch = function(text) {
		this.txtSearch.sendKeys(text);
		this.txtSearch.sendKeys(protractor.Key.ENTER);
	};
};

module.exports = MainPage;