// function declaration
//  function identifier (parameterLIst optional boleh ada boleh tidak) {FunctionBody}
// bentuk function declaration  dimana parametr daro function nya bersipat optional
function tampil (nama){
    alert('halo' + nama);
}



// function expression
// function identifier optional ( parametrList optional) { functionBody}
// function expresion dimana function nya bisa tidak menuliskan nama functionnya hanya saja function tersebut di bungkus ke dalam variable karena nama function di functiion expression merupakan optional
 var tampil = function (nama){
    alert('halo' + nama);
}
