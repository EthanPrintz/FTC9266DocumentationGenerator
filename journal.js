$("document").ready(function(){
    $(".page").each(function(){
        var pageWidth = $(this).css("width");
        alert(pageWidth);
        var pageWidth = praseInt(pageWidth.replace("px",""))*(8.5/11);
        alert(pageWidth);
    });
});