

var MsgButton = document.querySelector("#Mensagem-Button");



MsgButton.addEventListener("click", () => {

    let Input = document.querySelector("#Mensagem-Textarea").value;

    let MsgContent = document.createElement('textarea');
    MsgContent.innerText = Input;
    MsgContent.disabled = true;

    let MsgBoxDiv = document.createElement('div');
    MsgBoxDiv.classList.add('msg-box');

    let MsgContentDiv = document.createElement('div');
    MsgContentDiv.classList.add('msg-content');
    MsgContentDiv.appendChild(MsgContent);
    MsgBoxDiv.appendChild(MsgContentDiv);

    let MensagensContainerDiv = document.querySelector("#Mensagens-Container");
    MensagensContainerDiv.appendChild(MsgBoxDiv);

    

    let OptionsContentDiv = document.createElement('div');
    OptionsContentDiv.classList.add('options-content');

    let EditarButton = document.createElement('button');
    EditarButton.innerText = "Editar";
    EditarButton.classList.add('Editar-Button');


    let DeletarButton = document.createElement('button');
    DeletarButton.innerText = "Deletar";
    DeletarButton.classList.add('Deletar-Button');

  
    OptionsContentDiv.appendChild(EditarButton);
    OptionsContentDiv.appendChild(DeletarButton);

    MsgBoxDiv.appendChild(OptionsContentDiv);

    /* mantem controle sobre o botao Editar e seus status (edicao habilitada e desabilitada) */
    /* Contador impar = textarea desabilitado, Contador par = textarea habilitado, por padrao comeca desabilitado e com Contador = 1 */
    var ContadorEditar = 1;
    EditarButton.addEventListener("click", () => {
        ContadorEditar += 1;
        if (ContadorEditar % 2 == 0){
            MsgContent.disabled = false;
            EditarButton.innerText = "Salvar";
        }else if(ContadorEditar % 2 != 0){
            MsgContent.disabled = true;
            EditarButton.innerText = "Editar";
        }
    });

    DeletarButton.addEventListener("click", (e) => {

        let Parent = e.currentTarget.parentElement.parentElement.remove();
    
    });
    
    




    /* ESTRUTURA HTML
    <div id="msg-box" class="msg-box">
        <div id="msg-content" class="msg-content">
            
        </div>
        <div class="options-content">
            <div class="Edit-box">Editar</div><div class="Delete-box">Deletar</div>
        </div>
    </div>
    */

    document.querySelector("#Mensagem-Textarea").value = "";
});

