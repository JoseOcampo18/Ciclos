export default class Ciclos{

    constructor(limite){
        this._limite = limite;
    }

    serieS(){
        let s = 4;
        let cont = 0;
        let inicio = 3;

            while (cont < this._limite) {
                if(cont % 2 != 0){
                    s = s + (4 / inicio);
                }
                else{
                    s = s - (4 / inicio);
                }
                
                cont++;
                inicio = inicio + 2;
            }
        return s;
    }

    _factorial(n) {
        let total = 1; 
        for (let i = 1; i <= n; i++) {
            total = total * i; 
        }
        return total; 
    }

    serieE(){
        let cont = 1;
        let e = 1;

        while(cont <= this._limite){
            e = e + (1 / this._factorial(cont));
            cont++;
        }

        return e;
    }

}