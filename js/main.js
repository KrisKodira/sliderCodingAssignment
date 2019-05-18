$(document).ready(function(){

    var imageSlider = $(".slider");
    var imageCount = imageSlider.find("img").length;
    var lastImageWidth = 0;
    var currRightMargin = 0;
    var padding = 10;
    var currImageIndex = imageCount;

    var clickFired = function () {  
        if(currImageIndex == 4){
            $(".arrow-right").addClass("disabled");
        }
        else{
            $(".arrow-right").removeClass("disabled");
        }

        if(currImageIndex == 9){
            $(".arrow-left").addClass("disabled");
        }
        else{
            $(".arrow-left").removeClass("disabled");
        }
    }
    
    $("body").on("click", ".arrow-left:not(.disabled)", function () {  

        lastImageWidth = imageSlider.find("img:nth-child("+currImageIndex+")").width() + padding;

        currRightMargin -= lastImageWidth;

        imageSlider.find("img:first-child").animate({"margin-left": currRightMargin+"px"}, 250);
        imageSlider.find("img:last-child").animate({"margin-right": "-"+currRightMargin+"px"}, 250);

        currImageIndex++;

        clickFired();
    });

    $("body").on("click", ".arrow-right:not(.disabled)", function () {  

        lastImageWidth = imageSlider.find("img:nth-child("+currImageIndex+")").width() + padding;

        currRightMargin += lastImageWidth;

        imageSlider.find("img:first-child").animate({"margin-left": currRightMargin+"px"}, 250);
        imageSlider.find("img:last-child").animate({"margin-right": "-"+currRightMargin+"px"}, 250);

        currImageIndex--;

        clickFired();
    });
});