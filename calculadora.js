function calculadora() {
    if (document.getElementById("inTresConj").checked) {
        var Res = 0;
        var U = document.getElementById("inUniverso").value;
        var A = document.getElementById("inA").value;
        var B = document.getElementById("inB").value;
        var C = document.getElementById("inC").value;
        var AmB = document.getElementById("inAmB").value;
        var AmC = document.getElementById("inAmC").value;
        var BmC = document.getElementById("inBmC").value;
        var AmBmC = document.getElementById("inAmBmC").value;
        var caixaResposta = document.getElementById("res");

        if (U == "" || U <= 0) {
            alert("Por favor preencha corretamente o campo Universo, caso você queira descobrir o valor de universo preencha a caixa com um 'x'");
            document.getElementById("inUniverso").focus();
        } else if (A == "" || A <= 0) {
            alert("Por favor preencha corretamente o campo A, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inA").focus();
        } else if (B == "" || B <= 0) {
            alert("Por favor preencha corretamente o campo B, caso você queira descobrir o valor de B preencha a caixa com um 'x'");
            document.getElementById("inB").focus();
        } else if (AmB == "" || AmB < 0) {
            alert("Por favor preencha corretamente o campo A ∩ B, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inAmB").focus();
        } else if (AmC == "" || AmC < 0) {
            alert("Por favor preencha corretamente o campo A ∩ C, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inAmC").focus();
        } else if (BmC == "" || BmC < 0) {
            alert("Por favor preencha corretamente o campo B ∩ C, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inBmC").focus();
        } else if (AmBmC == "" || AmBmC < 0) {
            alert("Por favor preencha corretamente o campo A ∩ B ∩ C, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inAmBmC").focus();
        }

        if (A == "x" || A == "X") {
            u = Number(U);
            b = Number(B);
            c = Number(C);
            amb = Number(AmB);
            amc = Number(AmC);
            bmc = Number(BmC);
            todos = Number(AmBmC);


            Res = -(u) + (b + c) - (amb + amc + bmc) + todos;
            Res = -(Res);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }

            caixaResposta.textContent = "O resultado do conjunto A é: " + Res;
            var current = document.getElementById("inA");
            current.value = Res;
        }
        else if (B == "x" || B == "X") {
            u = Number(U);
            a = Number(A);
            c = Number(C);
            amb = Number(AmB);
            amc = Number(AmC);
            bmc = Number(BmC);
            todos = Number(AmBmC);


            Res = -(u) + (a + c) - (amb + amc + bmc) + todos;
            Res = -(Res);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inB");
            current.value = Res;
        }
        else if (C == "x" || C == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            amb = Number(AmB);
            amc = Number(AmC);
            bmc = Number(BmC);
            todos = Number(AmBmC);

            Res = -(u) + (a + b) - (amb + amc + bmc) + todos;
            Res = -(Res);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas");
                Res = "";
            }

            var current = document.getElementById("inC");
            current.value = Res;
        }
        else if (AmB == "x" || AmB == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            c = Number(C);
            amc = Number(AmC);
            bmc = Number(BmC);
            todos = Number(AmBmC);

            Res = -(u) + a + b + c - amc - bmc + todos;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inAmB");
            current.value = Res;

        } else if (AmC == "x" || AmC == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            c = Number(C);
            amb = Number(AmB);
            bmc = Number(BmC);
            todos = Number(AmBmC);

            Res = -(u) + a + b + c - amb - bmc + todos;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inAmC");
            current.value = Res;
        } else if (BmC == "x" || BmC == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            c = Number(C);
            amb = Number(AmB);
            amc = Number(AmC);
            todos = Number(AmBmC);

            Res = -(u) + a + b + c - amc - amb + todos;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inBmC");
            current.value = Res;
        } else if (AmBmC == "x" || AmBmC == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            c = Number(C);
            amb = Number(AmB);
            bmc = Number(BmC);
            amc = Number(AmC);
            Res = u - (a + b + c) + (amb + bmc + amc);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inAmBmC");
            current.value = Res;
        }
        else if (U == "x" || U == "X") {
            a = Number(A);
            b = Number(B);
            c = Number(C);
            amb = Number(AmB);
            bmc = Number(BmC);
            amc = Number(AmC);
            todos = Number(AmBmC);
            Res = a + b + c + todos - amb - bmc - amc;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inUniverso");
            current.value = Res;
        }

    } else if (document.getElementById("inDoisConj").checked) {
        var Res = 0;
        var U = document.getElementById("inUniverso").value;
        var A = document.getElementById("inA").value;
        var B = document.getElementById("inB").value;
        var AmB = document.getElementById("inAmB").value;

        if (U == "" || U <= 0) {
            alert("Por favor preencha corretamente o campo Universo, caso você queira descobrir o valor de universo preencha a caixa com um 'x'");
            document.getElementById("inUniverso").focus();
        } else if (A == "" || A <= 0) {
            alert("Por favor preencha corretamente o campo A, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inA").focus();
        } else if (B == "" || B <= 0) {
            alert("Por favor preencha corretamente o campo B, caso você queira descobrir o valor de B preencha a caixa com um 'x'");
            document.getElementById("inB").focus();
        } else if (AmB == "") {
            alert("Por favor preencha corretamente o campo A, caso você queira descobrir o valor de A preencha a caixa com um 'x'");
            document.getElementById("inAmB").focus();
        }

        if (U == "x" || U == "X") {
            a = Number(A);
            b = Number(B);
            amb = Number(AmB);
            Res = a + b - amb;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inUniverso");
            current.value = Res;
        }
        else if (A == "x" || A == "X") {
            u = Number(U);
            b = Number(B);
            amb = Number(AmB);
            Res = u - b + amb;
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inA");
            current.value = Res
        }
        else if (B == "x" || B == "X") {
            u = Number(U);
            a = Number(A);
            amb = Number(AmB);
            Res = u - (a + amb);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas")
                Res = "";
            }
            var current = document.getElementById("inB");
            current.value = Res
        }
        else if (AmB == "x" || AmB == "X") {
            u = Number(U);
            a = Number(A);
            b = Number(B);
            Res = u - (a + b);
            Res = -(Res);
            if (isNaN(Res)) {
                alert("A calculadora encontrou algum problema, por favor verifique as entradas");
                Res = "";
            }
            var current = document.getElementById("inAmB");
            current.value = -(Res);
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

