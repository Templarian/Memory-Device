class Rectangle extends Primitive {

    constructor(props) {
        super(props);
        this.#x = 0;
        this.#y = 0;
        this.#width = 400;
        this.#height = 240;
        this.#fill = 0;
    }

    #x;
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.render();
    }

    #y;
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
        this.render();
    }

    #width;
    get width() {
        return this.#width;
    }
    set width(value) {
        this.#width = value;
        this.render();
    }

    #height;
    get height() {
        return this.#height;
    }
    set height(value) {
        this.#height = value;
        this.render();
    }

    #fill;
    get fill() {
        return this.#fill;
    }
    set fill(value) {
        this.#fill = value;
        this.render();
    }
    
    render() {
        this.fillRectangle(
            this.#fill ? black : white,
            this.#x,
            this.#y,
            this.#width,
            this.#height
        );
    }

}

export default Rectangle;
