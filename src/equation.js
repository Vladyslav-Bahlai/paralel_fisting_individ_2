class Equation {
    max = 1;
    min = 1;
    x = [];
    n1;
    n2;
    numberOfLines;

    constructor(n1, n2) {
       this.n1 = n1;
       this.n2 = n2;
       this.numberOfLines = 2 * (n1 - 1) + n2;

        // creates 2d array with margin
        this.x = new Array(n2 + 2);
        for (let i = 0; i < n2 + 2; i++) {
            this.x[i] = new Array(n1 + 2);
            for (let j = 0; j < n1 + 2; j++) {
                // fill array with random numbers
                this.x[i][j] = Math.round(Math.random() * (this.max - this.min) + this.min);
            }
        }
    }

    planesMethod() {
        for (let v = 1; v <= this.numberOfLines; v++) {
            for (let j = 1; j <= this.n1; j++) {
                for (let i = 1; i <= this.n2; i++) {
                    const isLinePoint = this.isIterationBelongingToPlane(i, j, v);
                    if (isLinePoint) {
                        this.x[i][j] = this.x[i - 1][j] + this.x[i][j - 1] + this.x[i + 1][j - 1];
                        console.log(`iteration ${v}: x[${i}][${j}] = ${this.x[i][j]}`);
                    }
                }
            }
            console.log('-------------------------------------------')
        }
    }

    isIterationBelongingToPlane(i, j, v) {
        return j === 0.5 * (-i + v + 2);
    }

    displayMatrix() {
        for (let j = this.n1 + 1; j >= 0; j--) {
            const values = this.x.map(el => el[j]);
            console.log(values.join('\t') + '\n')
        }
    }
}

module.exports = Equation;