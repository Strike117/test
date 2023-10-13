$.get("header.html", contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});
$.get("modalidades.html", contentToInject => {
    $("#modalidades-placeholder").replaceWith(contentToInject);
});
$.get("becas.html", contentToInject => {
    $("#becas-placeholder").replaceWith(contentToInject);
});
$.get("simulacro.html", contentToInject => {
    $("#simulacro-placeholder").replaceWith(contentToInject);
});
$.get("footer.html", contentToInject => {
    $("#footer-placeholder").replaceWith(contentToInject);
});
