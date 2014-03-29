/**
 * Created by kuldeeparora on 29/03/2014.
 */

// JSON Pattern
Demo = {
    dataSeries : [],
    activeSeries : null,
    addSeries : function(series){
        this.dataSeries.push(series);
        this.updateUI();
    },
    getSeries : function(seriesId){
        for(var i=0; i < this.dataSeries.length; i++) {
            if(this.dataSeries[i].id == seriesId){
                return this.dataSeries[i];
            }
        }
    },
    updateUI : function(){
        $("#dataChart tbody").empty();
        $.each(this.dataSeries, function(index, series){

            var row=$('<tr/>');

            row.attr("id",series.id);
            row.append("<td>" + series.date + "</td>");
            row.append("<td>" + series.url + "</td>");
            row.append("<td>" + series.loadTime + "</td>");
            row.append("<td class='edit'>Edit</td>");

            $("#dataChart tbody").append(row);
        });
    }
};

// Class(Object)
function DataSeries(date, url, loadTime){
    this.date = date; // properties
    this.url= url;
    this.loadTime = loadTime;
    this.id = new Date().getTime();
};

$(document).ready(function (){
    function clearform(){
        $("#date").val("");
        $("#url").val("");
        $("#loadTime").val("");
    }

    $("#form").on("click", "#saveData", function(){
        var date = $("#date").val();
        var url = $("#url").val();
        var loadTime = $("#loadTime").val();
        var series = new DataSeries(date, url, loadTime);
        Demo.addSeries(series);
        clearform();
    });

    $("#dataChart").on("click", ".edit", function(){
        var series = Demo.getSeries($(this).parent().attr("id"));
        console.log(series);
        $("#date").val(series.date);
        $("#url").val(series.url);
        $("#loadTime").val(series.loadTime);
        $("#saveData").hide();
        $("#updateData").show();
        Demo.activeSeries = series;
    });

    $("#form").on("click", "#updateData", function(){
        var date = $("#date").val();
        var url = $("#url").val();
        var loadTime = $("#loadTime").val();
        Demo.activeSeries.date = date;
        Demo.activeSeries.url = url;
        Demo.activeSeries.loadTime = loadTime;
        Demo.updateUI();
        clearform();
        $("#saveData").show();
        $("#updateData").hide();
    });

});