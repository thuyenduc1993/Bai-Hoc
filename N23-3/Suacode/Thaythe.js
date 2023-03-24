class Hero {
    image;
    top;
    left;
    size;
    constructor(image,top,left,size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getHeroElement() {
        return '<img width="'+ this.size + '"' +
            ' height="' + this.size + '"' +
            'src="'+ this.image + '"' +
            'style="top: \'+this.top+\'px; left:\'+this.left+\'px;position:absolute;"></img>'
    }
}