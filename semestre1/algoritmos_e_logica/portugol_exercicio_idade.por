programa {
  inclua biblioteca Calendario
  funcao inicio() {
    escreva ("\n Olá mundo! ")
    inteiro dia = Calendario.dia_mes_atual()
    inteiro mes = Calendario.mes_atual()
    inteiro ano = Calendario.ano_atual()
    escreva ("Data atual: ", dia, " ", mes, " ", ano, " ")

    inteiro diaNasc
    escreva ("\n\n Escreva dia do nascimento: ")
    leia (diaNasc)

    inteiro mesNasc
    escreva ("\n Escreva mes do nascimento: ")
    leia (mesNasc)

    inteiro anoNasc
    escreva ("\n Escreva ano do nascimento com 4 digitos XXXX: ")
    leia (anoNasc)

    cadeia mesNascimento
    se (mesNasc == 1)
    {
      mesNascimento = "Janeiro"
      }
    se (mesNasc == 2)
    {
      mesNascimento = "Fevereiro"
      }
    se (mesNasc == 3)
    {
      mesNascimento = "Março"
      }
    se (mesNasc == 4)
    {
      mesNascimento = "Abril"
    }
    se (mesNasc == 5)
    {
      mesNascimento = "Maio"
    }
    se (mesNasc == 6)
    {
      mesNascimento = "Junho"
    }
    se (mesNasc == 7)
    {
      mesNascimento = "Julho"
    }
    se (mesNasc == 8)
    {
      mesNascimento = "Agosto"
    }
    se (mesNasc == 9)
    {
      mesNascimento = "Setembro"
    }
    se (mesNasc == 10)
    {
      mesNascimento = "Outubro"
    }
    se (mesNasc == 11)
    {
      mesNascimento = "Novembro"
    }
    se (mesNasc == 12)
    {
      mesNascimento = "Dezembro"
    }
    escreva ("\n De acordo com os dados inseridos a data de nascimento é: ", diaNasc, " de ", mesNascimento, " de ", anoNasc, "\n")

    inteiro idade = ano - anoNasc
        se (mes < mesNasc ou (mes == mesNasc e dia < diaNasc)) {
            idade = idade - 1
        }

    escreva ("\n A idade atual segundo os dados inseridos é: ", idade, "\n\n")

    inteiro idadeMinima
    idadeMinima = 18

    escreva ("Idade minima permitida é: ", idadeMinima, "\n\n", "Neste caso o acesso é: \n\n")

    cadeia acesso
      se (idade >= idadeMinima)
      {
        escreva ("Acesso Permitido")
      }
      senao
      {
        escreva ("Acesso Negado")
      }
    escreva ("\n")
  }
}
