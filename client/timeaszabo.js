if (Meteor.isClient) {
  Meteor.startup(function () {
    var stickyPanelOptions = {
                topPadding: 0,
                afterDetachCSSClass: "BoxGlow_Grey2",
                savePanelSpace: true,
                onDetached: function (detachedPanel, spacerPanel) {
//                    detachedPanel.html(detachedPanel.html() + " has been detached!");
//                    spacerPanel.css("background-color", "#1000ff");
                    console.log("detach");
                },
                onReAttached: function (detachedPanel) {
//                    detachedPanel.html(detachedPanel.html().replace(" has been detached!", ""));
                    console.log("redetach");
                },
                parentSelector: null
            };

           $('.navbar').stickyPanel(stickyPanelOptions);

           $("#scrollto").click(function (){
                   $.scrollTo('.links', 1500, {easing:'easeInOutExpo'});
           });
           $(".nav-me").click(function (){
                   $.scrollTo('.about', 1500, {easing:'easeInOutExpo'});
           });
           $(".nav-pf").click(function (){
                   $.scrollTo('.portfolio', 1500, {easing:'easeInOutExpo'});
           });
           $(".nav-contact").click(function (){
                   $.scrollTo('.contact', 1500, {easing:'easeInOutExpo'});
           });

   Session.set('currentPage', 'homePage');
			
  });
}

var Router = Backbone.Router.extend({
  routes: {
    "":                 "main", //this will be http://your_domain/
    ":pageId":           "pf"  // http://your_domain/help
  },

  main: function() {
    Session.set('currentPage', 'homePage');
  },

  pf: function(pageId) {
    var old  = Session.get('currentPage');
    if(old != pageId){
    	Session.set('currentPage', pageId);
    }
  }
});

var app = new Router;
Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});



Template.bq3.isCurrentPage = function(page){
	return Session.get('currentPage') == page;
}



