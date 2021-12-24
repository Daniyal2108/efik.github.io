// vintage-dots
// vintage-menu
// vintage-view-more
// vintage-view-less

// VINTAGE FAMILY PORTRAITS

// READ MORE

var vintageViewMore = document.getElementById("vintage-view-more");
var vintageDots = document.getElementById("vintage-dots");
var vintageViewLess = document.getElementById("vintage-view-less");
vintageViewLess.style.display = "none";
var vintageMenu = document.getElementById("vintage-menu");
vintageMenu.style.display = "none";
vintageViewMore.onclick = function() {
    vintageMenu.style.display = "initial";
    vintageViewLess.style.display = "inherit";
    vintageViewMore.style.display = "none";
    vintageDots.style.display = "none";
}

// READ LESS

vintageViewLess.onclick = function() {
    vintageMenu.style.display = "none";
    vintageViewLess.style.display = "none";
    vintageViewMore.style.display = "inherit";
    vintageDots.style.display = "initial";
}

// VINTAGE FAMILY PORTRAITS