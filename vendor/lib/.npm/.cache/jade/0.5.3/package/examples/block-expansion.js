
/**
 * Module dependencies.
 */

var jade = require('./../lib/jade');

jade.renderFile(__dirname + '/block-expansion.jade', function(err, html){
    if (err) throw err;
    console.log(html);
});