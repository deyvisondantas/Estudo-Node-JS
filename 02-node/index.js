/*
 0 - Obter um usuário
 1 - Obter um numerod e telefone do usuario, a partir de um ID
 2 - Obter endereço do usuario pelo ID
*/

function obterUsuario(callback){
    setTimeout(function(){  
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
        });
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: "99993333",
            ddd: "84",
        });
    }, 2000);

}

function obterEndereco(idUsuario, callback){
    setTimeout(()=> {
        return callback(null,{
            rua: 'dos bobos',
            numero: '0'
        })
    },2000)
}

//function resolverUsuario(usuario, error){
//    console.log("usuario:", usuario);
//}


obterUsuario(function resolverUsuario(error, usuario){
    if (error){
        console.log('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1,telefone){
        if (error1){
            console.log('DEU RUIM em TELEFONE', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if (error2){
                console.log('DEU RUIM em ENDEREÇO', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua},${endereco.numero}
                Telefone: ${telefone.ddd},${telefone.telefone}            
            `);
        });
    });
});
