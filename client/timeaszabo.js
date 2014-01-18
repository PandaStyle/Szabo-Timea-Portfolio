if (Meteor.isClient) {
    Meteor.startup(function () {
        Session.set('currentPage', 'homePage');
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-47255860-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
}

Template.main.rendered = function(){
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
                   $.scrollTo('.about', 1500, {easing:'easeInOutExpo', offset: {top: -80, left:0} });
           });
           $(".nav-pf").click(function (){
                   $.scrollTo('.portfolio', 1500, {easing:'easeInOutExpo', offset: {top: -80, left:0} });
           });
           $(".nav-contact").click(function (){
                   $.scrollTo('.contact', 1500, {easing:'easeInOutExpo'});
           });

          $("#personal").hover(function (){
                   $(this).attr("src", "/profilkep2.jpg")
              },
              function () {
                    $(this).attr("src", "/profilkep_ff2.jpg")
              }
            );

            $("#personal").click(function(){
               window.open(
                  'http://www.linkedin.com/pub/szabo-timea/33/45a/68',
                  '_blank' // <- This is what makes it open in a new window.
                );
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



