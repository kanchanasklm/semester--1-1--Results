let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let CalculusLinearAlgebraEl=document.getElementById("Calculus&LinearAlgebra");
let BeeeEl=document.getElementById("BEEE");
let PstcEl=document.getElementById("Clanguage");
let EgdEl=document.getElementById("Drawing");
let ElcLabEl=document.getElementById("ELC LAB1");
let BeeeLabEl=document.getElementById("BEEE LAB");
let PstcLabEl=document.getElementById("pstc lab");
let IcEl=document.getElementById("Indian Constitution");
let creddits=20; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let CalculusLinearAlgebraElGrade = CalculusLinearAlgebraEl.value;
    let BeeeElGrade = BeeeEl.value;
    let PstcElGrade=PstcEl.value;
    let EgdElGrade=EgdEl.value; 
    let ElcLabElGrade=ElcLabEl.value;
    let BeeeLabElGrade=BeeeLabEl.value;
    let PstcLabElGrade=PstcLabEl.value;
    let IcElGrade=IcEl.value;
   
    result+=credits(CalculusLinearAlgebraElGrade,4);
    result+=credits(BeeeElGrade,4);
    result+=credits(PstcElGrade,4);
    result+=credits(EgdElGrade,2.5);
    result+=credits(ElcLabElGrade,2.5);
    result+=credits(BeeeLabElGrade,1.5);
    result+=credits(PstcLabElGrade,1.5);
    result+=credits(IcElGrade,0);
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};

