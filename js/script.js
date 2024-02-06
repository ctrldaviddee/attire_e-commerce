// init Isotope
var $collection = $(".collection-list").isotope({

  // options
  
});

// filter items on button click
$(".filter-button-group").on("click", "button", function () {

  var filterValue = $(this).attr("data-filter");

  resetfilterBtns();

  $(this).addClass("active-filter-btn");

  $collection.isotope({ filter: filterValue });

});

var filterBtns = $(".filter-button-group").find("button");

function resetfilterBtns() {

  filterBtns.each(function () {

    $(this).removeClass("active-filter-btn");

  });
}
