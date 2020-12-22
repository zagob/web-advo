(function () {
    document.getElementById('contatoForm').addEventListener('submit', function () {
          var nome = this.querySelector('input[name=nome]'), nome = nome.value;
          var email = this.querySelector('input[name=email]'), email = email.value;
          var celular = this.querySelector('input[name=celular]'), celular = email.value;
          var menssagem = this.querySelector('input[name=menssagem]'), menssagem = email.value;
        //   var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
            var texto = `Olá destinatário, \n Meu nome é 
                ${nome} e meu email é ${email}, telefone ${celular}
                quero dizer ${menssagem}
            `
          this.querySelector('input[name=Body]').setAttribute('value', texto);
      });
    });