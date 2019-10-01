//declaração de variáveis
var codCargo = Number(prompt("Informe o código do cargo"));
var salario = Number(prompt("Informe o salário do funcionário: "));

//menu de operação
switch (codCargo) {
    case 101:
        console.log("O funcionário possui o cargo de gerente e receberá 10% aumento de salário ");
        console.log("Salário antigo: R$ " + salario.toFixed(2));
        //atribuindo novo salário segundo tabela
        var novoSalario = salario + salario * 0.1;
        console.log("Novo salario: R$" + novoSalario.toFixed(2));
        console.log("Diferença: " + (novoSalario - salario).toFixed(2));
        break;

    case 102:
        console.log("O funcionário possui o cargo de Engenheiro e receberá 20% aumento de salário ");
        console.log("Salário antigo: R$ " + salario.toFixed(2));
        var novoSalario = salario + salario * 0.2;
        console.log("Novo salario: R$ " + novoSalario.toFixed(2));
        console.log("Diferença: " + (novoSalario - salario).toFixed(2));
        break;

    case 103:
        console.log("O funcionário possui o cargo de Técnico e receberá 30% aumento de salário ");
        console.log("Salário antigo: R$ " + salario.toFixed(2));
        var novoSalario = salario + salario * 0.3;
        console.log("Novo salario: R$ " + novoSalario.toFixed(2));
        console.log("Diferença: " + (novoSalario - salario).toFixed(2));
        break;

    default:
        console.log("O funcionário não possui cargo cadastrado no sistema e receberá 40% de aumento de salário ");
        console.log("Salário antigo: R$ " + salario.toFixed(2));
        var novoSalario = salario + salario * 0.3;
        console.log("Novo salario: R$ " + novoSalario.toFixed(2));
        console.log("Diferença: " + (novoSalario - salario).toFixed(2));
        break;

}