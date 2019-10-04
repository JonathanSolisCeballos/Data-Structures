//Validar que los valores estén dentros de los límites
class Matrix{
    constructor(row,column){
        this.rows = row;
        this.columns = column;

        this.matrix = new Array(row);//hacerlas en 0
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
    
    getRow(r){//validar tamaño
        return ((r > this.matrix.length) ? Error('valor fuera de los límites') : this.matrix[r]);
    }

    getCol(c){
        if(c > this.columns)
            return Error('valor fuera de los límites');
        else {
            let arr =[];
            for(let i = 0;i<this.rows;i++){
                arr.push(this.matrix[i][c])
            }
            return arr
        }
        
    }

    isSquared(){
        return (this.rows === this.columns) ? true : false;
    }
    isSymetric(){
    }
    isIdentity(){
        for(let i=0;i<this.rows;i++){
            for(let j=0;j<this.columns;j++){
                if((i === j) && (this.matrix[i,j] != 1))
                    return false
                else if((this.matrix[i,j] != 0))
                    return false
            }
        }
        return isIdentity;
    }
    
}

let matrix1 = new Matrix(3,3);
matrix1.initRandom();
console.log(matrix1.getRow(0))
console.log(matrix1.getCol(1))
console.table(matrix1.matrix);