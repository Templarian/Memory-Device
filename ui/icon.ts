import Bitmap from 'commodetto/Bitmap';
import Primitive, { PrimitiveProps } from './primitive';

type IconSource = [Bitmap, number, number, number];

interface IconProps {
    x?: number;
    y?: number;
    isBlack?: boolean;
    source: IconSource
}

class Icon extends Primitive {

    constructor(props: IconProps & PrimitiveProps) {
        super(props);
        this.#x = props.x || 0;
        this.#y = props.y || 0;
        this.#source = props.source;
        this.#isBlack = props.isBlack || true;
    }

    #x: number;
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.render();
    }

    #y: number;
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
        this.render();
    }

    #source: IconSource;
    get source() {
        return this.#source;
    }
    set source(value) {
        this.#source = value;
        this.render();
    }

    #isBlack: boolean;
    get isBlack() {
        return this.#isBlack;
    }
    set isBlack(value) {
        this.#isBlack = value;
        this.render();
    }

    render() {
        this.drawSprite(
            this.#source[0],
            this.#x,
            this.#y,
            this.#source[1] * this.#source[2],
            this.#source[1] * this.#source[3],
            this.#source[1],
            this.#source[1],
            this.#isBlack
        );
    }

}

export default Icon;
