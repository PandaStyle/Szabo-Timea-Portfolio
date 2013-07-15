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


           $('.hover').hover(function(){
               $(this).addClass('flip');
           },function(){
               $(this).removeClass('flip');
           });
  });
}
