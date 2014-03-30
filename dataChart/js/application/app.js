/**
 * Created by kuldeeparora on 29/03/2014.
 */

// JSON Pattern
Demo = {
    dataSeries : [],
    activeSeries : null,
    sortBy : null,
    sortOrder : null,
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
    removeSeries : function(seriesId){
        for(var i=0; i < this.dataSeries.length; i++) {
            if(this.dataSeries[i].id == seriesId){
                this.dataSeries.splice(i, 1);
                break;
            }
        }
        this.updateUI();
    },
    updateUI : function(){
        $("#dataChart tbody").empty();
        if(this.dataSeries.length == 0){
            $("#container").hide();
            $("#dataChart").hide();
            return
        }
        $.each(this.dataSeries, function(index, series){
            var row=$('<tr/>');

            if(index%2 == 0){
                row.addClass("even");
            }
            else { row.addClass("odd"); }

            row.attr("id",series.id);
            row.append("<td>" + series.date + "</td>");
            row.append("<td>" + series.url + "</td>");
            row.append("<td>" + series.loadTime + "</td>");
            row.append("<td><span class='edit'>Edit</span> | <span class='delete'>Delete</span></td>");

            $("#dataChart tbody").append(row);
        });
        $("#dataChart").show();
        this.updateChart();
    },

    updateChart : function(){
        $("#container").show();
        var self=this;
        var chartData = [];
        var categories=[];
        for(var i=0; i < this.dataSeries.length; i++) {
            chartData.push(parseInt(this.dataSeries[i].loadTime));
            categories.push(this.dataSeries[i].url);
        }

        $('#container').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Web performance data chart'
            },
            xAxis: {
                title: {text : "Page URL"},
                categories: categories
            },
            yAxis: {
              title: {text : "Page LoadTime(ms)"}
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                formatter: function(){
                    return "Page load time on "+self.dataSeries[this.point.x].date;
                }
            },
            series: [{
                name:'URL LoadTime',
                data:chartData
            }]
        });
    },
    sortData : function(sortBy){
        var self = this;

        if(this.sortOrder == null || this.sortOrder == "desc"){
            this.sortOrder = "asc";
        } else {
            this.sortOrder = "desc";
        }

        switch (sortBy){
            case "date" :
                this.dataSeries.sort(function(a, b){
                    var a1= a.date, b1= b.date;
                    if(a1== b1) return 0;
                    if (self.sortOrder == "asc"){
                        return a1> b1? 1: -1;
                    } else {
                        return a1> b1? -1: 1;
                    }
                });
                break;
            case "url" :
                this.dataSeries.sort(function(a, b){
                    var a1= a.url, b1= b.url;
                    if(a1== b1) return 0;
                    if (self.sortOrder == "asc"){
                        return a1> b1? 1: -1;
                    } else {
                        return a1> b1? -1: 1;
                    }
                });
                break;
            case "loadTime" :
                this.dataSeries.sort(function(a, b){
                    var a1= a.loadTime, b1= b.loadTime;
                    if(a1== b1) return 0;
                    if (self.sortOrder == "asc"){
                        return a1> b1? 1: -1;
                    } else {
                        return a1> b1? -1: 1;
                    }
                });
                break;
        }
        this.updateUI();
    }
};

// Class(Object)
function DataSeries(date, url, loadTime){
    this.date = date; // properties
    this.url= url;
    this.loadTime = parseInt(loadTime);
    this.id = new Date().getTime();
};

$(document).ready(function (){

    $("#date").datepicker();

    function clearform(){
        $("#date").val("");
        $("#url").val("");
        $("#loadTime").val("");
    }

    $("#form").on("click", "#saveData", function(){
        var date = $("#date").val();
        var url = $("#url").val();
        var loadTime = $("#loadTime").val();
        if (isNaN(loadTime)){
            alert("Please enter Number in Load Time")
            return;
        }
        var series = new DataSeries(date, url, loadTime);
        Demo.addSeries(series);
        clearform();
    });

    $("#dataChart").on("click", ".edit", function(){
        var rowId = $(this).parent().parent().attr("id");
        var series = Demo.getSeries(rowId);
        $("#date").val(series.date);
        $("#url").val(series.url);
        $("#loadTime").val(series.loadTime);
        $("#saveData").hide();
        $("#updateData").show();
        Demo.activeSeries = series;
    });

    $("#dataChart").on("click", ".delete", function(){
        var rowId = $(this).parent().parent().attr("id");
        Demo.removeSeries(rowId);
    });

    $("#form").on("click", "#updateData", function(){
        var date = $("#date").val();
        var url = $("#url").val();
        var loadTime = $("#loadTime").val();
        if (isNaN(loadTime)){
            alert("Please enter Number in Load Time")
            return;
        }
        Demo.activeSeries.date = date;
        Demo.activeSeries.url = url;
        Demo.activeSeries.loadTime = loadTime;
        Demo.updateUI();
        clearform();
        $("#saveData").show();
        $("#updateData").hide();
    });

    $("#dataChart").on("click", ".sortDate", function(){
        Demo.sortData("date")
    });

    $("#dataChart").on("click", ".sortUrl", function(){
        Demo.sortData("url")
    });

    $("#dataChart").on("click", ".sortLoadTime", function(){
        Demo.sortData("loadTime")
    });

});