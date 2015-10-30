	//Width and height
		/*var w = 500;
		var h = 200;
		var barPadding = 1; */ // <-- New!
		var svgWidth = 1000;
		var svgHeight = 400;
		var spacing = 2;


		var myData = [ 10, 16, 19, 31, 47, 52, 24, 43 ,51 , 44, 33, 30, 22, 21, 36, 8, 16, 42, 48 ,39, 42, 11,];

		/*myData.sort(d3.descending);*/

		var heightScale = d3.scale.linear()
							.domain([0,d3.max(myData)])
							.range([0,svgHeight]);

		var colorScale = d3.scale.linear()
							.domain([0,45,d3.max(myData)])
							.range(["#F5821F","#79CED7","#F8F4E4"])

		var tooltip = d3.select("#d3Graph")
						.append("div")
						.attr("id","tooltip")
						.classed("hidden","true")

		var svg = d3.select("#d3Graph")
					.append("svg")
					.attr("width",svgWidth)
					.attr("height",svgHeight)

			svg.selectAll("rect")
					.data(myData)
					.enter()
					.append("rect")	
					.attr("x", function(d, i) {
					    return i * (svgWidth / myData.length);
					})
					.attr("y",function(d){return svgHeight - (heightScale(d));
					})   
					.attr("width", svgWidth / myData.length - spacing)
					.attr("height",heightScale)
					.attr("fill", function(d){return(colorScale(d));
					})
					.on("mouseover", function(d){
						d3.select("#tooltip")
						  .classed("hidden",false)
						  .style("left", d3.event.pageX + "px")
						  .style("top", d3.event.pageY - 70 + "px")
						  tooltip.html(d);
					})
					.on("mouseout", function(){
						d3.select("#tooltip")
						.classed("hidden", true);
					});
