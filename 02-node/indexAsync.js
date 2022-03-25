/*
 0 - Obter um usuário
 1 - Obter um numerod e telefone do usuario, a partir de um ID
 2 - Obter endereço do usuario pelo ID
*/
// importamos um módulo interno do node.js

const { mainModule } = require("process");
const util = require("util")
const obterEnderecoAssync = util.promisify(obterEndereco)

function obterUsuario(callback) {
  // quando der algum problema -> reject(ERRO)
  // quando sucesso - > RESOLVE
  return new Promise(function resolvePromisse(resolve, reject){
    setTimeout(function () {
        //return reject(new Error('DEU RUIM DE VERDADE!'))

        return resolve({
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
        });
      }, 1000);
  }) 
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromisse(resolve, reject){
    setTimeout(() => {
        return resolve({
          telefone: "99993333",
          ddd: 84,
        });
      }, 2000);
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: "0",
    });
  }, 2000);
}

// 1o passo: adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main(){
    try {
      console.time('medida-promise')
      const usuario = await obterUsuario()
      // const telefone = await obterTelefone(usuario.id)
      // const endereco = await obterEnderecoAssync(usuario.id)

      resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAssync(usuario.id)
      ])
      const endereco = resultado[1]
      const telefone = resultado[0]
      console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
        Endereço: ${endereco.rua}, ${endereco.numero}
        `)
      console.timeEnd('medida-promise')
    }
    catch (error){
      console.error('DEU RUIM', error)
    }
  
}

/*
const usuarioPromise = obterUsuario()
// para manipular o sucesso usando a função .then
// para manipular erros, usando o .catch
// usario -> telefone -> telefone
usuarioPromise
  .then(function (usuario){
      return obterTelefone(usuario.id)
      .then(function resolverTelefone(result){
          return{
            usuario:{
              nome: usuario.nome,
              id: usuario.id
            },
            telefone: result
          }
        })
  })
  .then(function(resultado){
      const endereco = obterEnderecoAssync(resultado.usuario.id)
      return endereco.then(function resolverEndereco(result){
        return{
          usuario: resultado.usuario,
          telefone: resultado.telefone,
          endereco: result
        }
      })
  })
  .then(function (resultado){
    console.log(`
      Nome: ${resultado.usuario.nome}
      Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
      Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `)
  })
  .catch(function (error) {
    console.error('DEU RUIM', error)
  })

/*obterUsuario(function resolverUsuario(error, usuario){
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
});*/ 
