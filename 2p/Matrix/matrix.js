class Matrix{
    constructor(row,column){
        this.rows = row;
        this.columns = column;

        this.matrix = new Array(row);
        for(let i=0;i<this.matrix.length;i++){
            this.matrix[i] = new Array(column);
        }
    }

    initRandom(){
        for(let i = 0;i < this.rows;i++){
            for(let j=0;j < this.columns;j++){
                this.matrix[i][j] = Math.ceil(Math.random() * 63);
            }
        }
    }
    
}

let matrix1 = new Matrix(3,3);
matrix1.initRandom();
console.table(matrix1.matrix);