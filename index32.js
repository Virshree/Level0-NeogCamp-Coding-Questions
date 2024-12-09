
function printNumberPatternPercentage(n,m){

    let output='';
    for(let i=1;i<=n;i++){
        output=output+i;
        if(i%m==0){
            output=output+"%";

        }
    }
    console.log(output);
}
// printNumberPatternPercentage(20,5);

// 12345%678910%1112131415%1617181920%

function printEvenNumbersBetween(p,n,m){

    if(p>n && n<m){
        for(let i=p;i<=m;i++){
            if(i%2==0){
                console.log(i); 
            }
        }
    }
}
// printEvenNumbersBetween(8,5,15);

/*
8
10
12
14
*/