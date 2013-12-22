$(function() {
  populateProductTypes();
  $("#product_type").change(populateManufacturers);
  $("#manufacturer").change(populateModels);
  $("#models").change(displayProductInfo);
});

function populateProductTypes() {
  Object.keys(PRODUCTS).forEach(function(type) {
    var option = '<option value="' + type + '">' + type + '</option>';
    $("#product_type").append(option);
  })
}

function populateManufacturers() {
  $("#manufacturer option[value != '']").remove();
  Object.keys(PRODUCTS[$("#product_type").val()]).forEach(function(manf) {
    var option = '<option value="' + manf + '">' + manf + '</option>';
    $("#manufacturer").append(option);
  });
}

function populateModels() {
  $("#models option[value != '']").remove();

  var type = $("#product_type").val();
  var manf = $("#manufacturer").val();
  PRODUCTS[type][manf].forEach(function(product) {
    var option = '<option value="' + product[0] + '">' + product[0] + '</option>';
    $("#models").append(option);
  });

}

function displayProductInfo() {
  var type = $("#product_type").val();
  var manf = $("#manufacturer").val();
  var model_index = $("#models").prop("selectedIndex") - 1;
  for(var i = 0; i < PRODUCTS[type][manf][model_index].length; i++) {
    var m = PRODUCTS[type][manf][model_index][i]
    $("#product_info #column_" + i).html(m);
  }
}
