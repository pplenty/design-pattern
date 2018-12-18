/**
 * @author : yusik
 * @date : 29/11/2018
 */

var ChartFactory = require('./public/javascripts/pattern/factory/ChartFactory');
var BasicChart = require('./public/javascripts/pattern/factory/BasicChart');

ChartFactory.register('string', String);
ChartFactory.register('chart', BasicChart);

var str1 = ChartFactory.create('string', 'Test1');
var chart1 = ChartFactory.create('chart', 'Test2');

console.log(str1);
console.log(chart1.draw());