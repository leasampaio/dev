const ordenar = (...args) => {
    let x = 0;
    while (x < args.length){
        for (let i = 0; i< args.length-1; i++) {
            if(args[i] > args[i+1]){           
                [args[i] , args[i+1]]=[args[i+1] , args[i]];            
            }            
        }
    x ++;
    }
    return args;

}
console.log(ordenar(5,4,3,2,1));
