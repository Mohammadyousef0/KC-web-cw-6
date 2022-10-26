// جافاسكربت ليست جافا
alert("مرحباً بك في موقعي الذي سيحسب درجتك!");

let grade = prompt("اكتب درجتك بالأرقام");
console.log(grade);

if (grade >= 90 && grade <= 100) {
    console.log("%cلقد حصلت على امتياز 🥳"  ,"background-color: black; color:Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue")
    

} else if (grade >= 80 && grade < 90) {
    console.log("%c لقد حصلت على جيد جداً🤩" ,"background-color: black; color: Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");

} else if (grade >= 70 && grade < 80) {
    console.log("%c لقد حصلت على جيد🙂" ,"background-color: black; color: Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    
} else if (grade >= 60 && grade < 70) {
    console.log("%c لقد حصلت على مقبول😕" ,"background-color: black; color: Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    
} else if (grade >= 50 && grade < 60) {
    console.log("%c لقد حصلت على ضعيف☹️" ,"background-color: black; color: Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    
} else if (grade < 50) {
    console.log("%c راسب💔", "background-color: black; color: Blue; font-size:30px; font-weight:bold; text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
    
}