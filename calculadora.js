function calculadora() {
    if (document.getElementById("inTresConj").checked) {
        alert("TRES");



    } else if (document.getElementById("inDoisConj").checked) {
        alert("DOIS");
        var Res = 0;
        var U = document.getElementById("inUniverso").value;
        var A = document.getElementById("inA").value;
        var B = document.getElementById("inB").value;
        var C = document.getElementById("inC").value;
        var AmB = document.getElementById("inAmB").value;
        var AmC = document.getElementById("inAmC").value;
        var BmC = document.getElementById("inBmC").value;
        var AmBmC = document.getElementById("inAmBmC").value;

        if (U == "x") {
            alert("-U");
        }
        else if (A == "x") {
            u = Number(U);
            b = Number(B);
            amb = Number(AmB);
            Res = u - (b + amb);

            var current = document.getElementById("inA");
            current.value = Res
        }
        else if (AmB == "x") {
            u = Number(U);
            a = Number(A);
            b = Number(B);

            Res = u - (a + b);
            var current = document.getElementById("inAmB");
            current.value = Res
        }






    }



}


var verificador = document.getElementById("btVer");
verificador.addEventListener("click", calculadora);



