this["hbs"] = this["hbs"] || {};
this["hbs"]["desc"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"description\">\n\n  <span>Age: "
    + alias3(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"age","hash":{},"data":data}) : helper)))
    + "</span><br/>\n\n  <span>Favorite color:\n    <div class =\"colorWrap\">\n\n      <span class=\"colors\" style=\"background-color:"
    + alias3(((helper = (helper = helpers.favColor || (depth0 != null ? depth0.favColor : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"favColor","hash":{},"data":data}) : helper)))
    + "\"></span>\n\n    </div>\n\n  </span><br/>\n\n  <div class=\"imgwrap\" height=\"300px\" width=\"auto\">\n\n    <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class = \"pics\">\n\n  </div>\n\n  <button id=\"delete\" class=\"deleteContact\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">Delete</button>\n\n</div>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n      <a href=\"#contact/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class =\"nameList\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Fam &amp; Friends</h2>\n\n<form id=\"addContact\">\n\n  <input type=\"text\" placeholder=\"enter first name\" id=\"first-name\">\n  <input type=\"text\" placeholder=\"enter last name\" id=\"last-name\">\n  <input type=\"text\" placeholder=\"enter age\" id=\"age\">\n  <input type=\"text\" placeholder=\"enter favorite color\" id=\"fav-color\">\n  <input type=\"text\" placeholder=\"enter image url\" id=\"image-url\">\n\n  <button>Add Contact</button>\n</form>\n\n\n<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.contact : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});