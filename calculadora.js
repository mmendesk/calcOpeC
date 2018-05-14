function calculadora() {
    if (document.getElementById("inTresConj").checked) {
        alert("CAIU NA FUNÇÃO DE TRÊS CONJUNTOS");
        var Res = 0;
        var U = document.getElementById("inUniverso").value;
        var A = document.getElementById("inA").value;
        var B = document.getElementById("inB").value;
        var C = document.getElementById("inC").value;
        var AmB = document.getElementById("inAmB").value;
        var AmC = document.getElementById("inAmC").value;
        var BmC = document.getElementById("inBmC").value;
        var AmBmC = document.getElementById("inAmBmC").value;

    } else if (document.getElementById("inDoisConj").checked) {
        alert("CAIU NA FUNÇÃO DE DOIS CONJUNTOS");
        var Res = 0;
        var U = document.getElementById("inUniverso").value;
        var A = document.getElementById("inA").value;
        var B = document.getElementById("inB").value;
        var AmB = document.getElementById("inAmB").value;

        if (U == "" || U <= 0) {
            alert("Por favor preencha corretamente o campo Universo, caso você queira descobrir o valor de universo preencha a caixa com um 'x'");
            document.getElementById("inUniverso").focus();
        } else if(A == "" || A <= 0) {
            alert("Por favor preencha corretamente o campo A, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inA").focus();
        } else if(B == "" || B <= 0) {
            alert("Por favor preencha corretamente o campo B, caso você queira descobrir o valor de B preencha a caixa com um 'x'");
            document.getElementById("inB").focus();
        } else if(AmB == "") {
            alert("Por favor preencha corretamente o campo A, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inAmB").focus();
        }

        if (U == "x" || U == "X") {
            a = Number(A);
            b = Number(B);
            amb = Number(AmB);
            Res = a + b + amb;
            var current = document.getElementById("inUniverso");
            current.value = Res
        }
        else if (A == "x" || A == "X") {
            u = Number(U);
            b = Number(B);
            amb = Number(AmB);
            Res = u - (b + amb);
            var current = document.getElementById("inA");
            current.value = Res
        }
        else if (B == "x" || B == "X") {
            u = Number(U);
            a = Number(A);
            amb = Number(AmB);
            Res = u - (a + amb);
            var current = document.getElementById("inB");
            current.value = Res
        }
        else if (AmB == "x" || AmB == "X") {
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


function doalertA(checkboxElem) {
    if (checkboxElem.checked) {
        op3.style.display = 'none';
        op4.style.display = 'none';
        op5.style.display = 'none';
        op6.style.display = 'none';
        img_d.style.display = 'block';
        img_t.style.display = 'none';
    } else {
        alert("bye");
    }
}
function doalertB(checkboxElem) {
    if (checkboxElem.checked) {
        img_d.style.display = 'none';
        img_t.style.display = 'block';
        op3.style.display = 'block';
        op4.style.display = 'block';
        op5.style.display = 'block';
        op6.style.display = 'block';
    } else {
        alert("bye");
    }
}