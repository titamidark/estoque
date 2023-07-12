const dadosGrid=document.querySelector("#dadosGrid");

const endpoint_todoscolaboradores= 'http://127.0.0.1:1880/todosusuarios';
fetch(endpoint_todoscolaboradores)
    .then(res => res.json())
    .then(res=>{
        console.log(res);
        dadosGrid.innerHTML="";
        res.forEach(e=>{
            const divlinha=document.createElement("div");
            divlinha.setAttribute("class","linhaGrid");

            const divcol1 = document.createElement("div");
            divcol1.setAttribute("class", "colunaLinhaGrid c1");
            divcol1.innerHTML=e.n_usuario_usuario;
            divlinha.appendChild(divcol1);

            const divcol2 = document.createElement("div");
            divcol2.setAttribute("class", "colunaLinhaGrid c2");
            divcol2.innerHTML=e.s_nome_usuario;
            divlinha.appendChild(divcol2);

            const divcol3 = document.createElement("div");
            divcol3.setAttribute("class", "colunaLinhaGrid c3");
            divcol3.innerHTML=e.n_tipousuario_tipousuario;
            divlinha.appendChild(divcol3);

            const divcol4 = document.createElement("div");
            divcol4.setAttribute("class", "colunaLinhaGrid c4");
            divcol4.innerHTML=e.c_status_usuario;
            divlinha.appendChild(divcol4);

            const divcol5 = document.createElement("div");
            divcol5.setAttribute("class", "colunaLinhaGrid c5");
            divlinha.appendChild(divcol5);

            dadosGrid.appendChild(divlinha);

        })


    })