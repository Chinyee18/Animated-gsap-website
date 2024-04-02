var RENDERER = {
	RESIZE_INTERVAL : 60,
	RADIUS : 80,
	RATE : 0.98,
    COLUMNS :40,
	init : function(){
		this.setParameters();
	},
	setParameters : function(){
		this.$window = $(window);
		this.$container = $('#hex-container');
		this.$div = $('<div />',{ class : 'honeycomb'});
		
		this.$columns = this.createColumns(this.COLUMNS, this.$div);
        this.context = this.$div.appendTo(this.$container);

        this.$columnDivs = document.getElementsByClassName("column");
        this.$hexes = this.createHexs(1, ['hexes-40']);
        this.$hexes = this.createHexs(2, ['hexes-9', 'hexes-11','hexes-17','hexes-10','hexes-18','hexes-23','hexes-30','hexes-38']);
        this.$hexes = this.createHexs(3, ['hexes-3', 'hexes-6','hexes-7','hexes-33','hexes-37','hexes-39']);
        this.$hexes = this.createHexs(4, ['hexes-2', 'hexes-4','hexes-29','hexes-34']);
        this.$hexes = this.createHexs(5, ['hexes-1', 'hexes-5','hexes-8','hexes-28','hexes-32','hexes-36']);
        this.$hexes = this.createHexs(6, [ 'hexes-31','hexes-35']);
        
        this.context = this.$div.appendTo(this.$container);
	},
    createColumns : function(numberOfColumns, appendToDiv){
		for (let i=0, len=numberOfColumns; i < len; i++) {
            this.$column = $("<div>", { class: `hexes-${[i+1]} column` });
            this.$column.appendTo(appendToDiv);
        }
	},
    createHexs : function(numberOfHexes, className){
        for (let i=0, len=className.length; i < len; i++) {
            for (let j=0, len=numberOfHexes; j < len; j++) {
                this.$class = document.getElementsByClassName(className[i]);
                this.$hex = $(`<a class="hex">
                <div class="wrapper">
                  <div class="hexagon color-1"></div>
                </div> </a>`);
                this.$hex.appendTo(this.$class);
            }
        }
	},
};
$(function(){
	RENDERER.init();
});