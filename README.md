# Notas de aula

## Este é meu primeiro curso de JavaScript, então vou lascar algumas notas de aulas logo abaixo

Caso você se interesse pelo curso, ele foi feito via Udemy, pelo link 

https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/

## Tópicos

- [Seção 2 - JavaScript básico](#init)

- 

<a id='init'></a>

### Seção 2 - JavaScript básico

#### Console log

```js
console.log('Willian David Soncini');
console.log("willian 'teste'");
console.log('Willian "teste"');
console.log(123123123, 15.8612, 'Willian');
console.log(` 'Willian' "teste" ${123}`);
```

### Comentários

```js
// Comentário na linha
/*
    Comentário
    Longo
*/
```

### Variavéis

Em váriaveis geralmente se utiliza camelCase

### let

- Pode ser iniciliadas vazias

- Seus valores podem ser alterados no decorrer do código

- Só existe dentro do escopo informado

```js
let nome;
nome = 'willian';
let sobreNome = 'Soncini';
```

### const

- Não pode ser inicializada vazia

- Seu valor não pode ser diretamente alterado

- Só existe dentro do escopo informado

```js
const nome = 'willian';
const dez =  10;
```

#### var

- Não utilize var

- Utilize let ou const

- var é global

```js
var teste = 'teste'
```

### Tipos de dados primitivos

```js
const nome = 'string' //string
const numero = 10 //number
const numero = 2.5 //number
let teste //undefined
const nulo = null //null
const aprovado = true //boolean
//symbol
```

Ver o tipo da variavél (typeof)

```js
const nome = 'willian'
typeof nome // string
const numero = 10
typeof numero //number
typeof nome, numer //string number
```

### Valores por referencia

Aqui os valores trabalham como ponteiros, onde uma variavel aponta para outra. Dessa forma quando uma variavel que faz referencia (ponteiro) for alterada, tanto a variavél ponteiro quanto a varaivel de referencia será alterada.

Exemplo:

```js
const a = [1,2,3]
const b = a
console.log(a,b) // [1,2,3] [1,2,3]
b.push(4)
console.log(a,b) // [1,2,3,4] [1,2,3,4]
```

### Operadores aritimeticos

#### [Precedencia documentação]([Precedência de Operadores - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence))

- ()

- *

- */%

- +-

#### Contatenação utilizando strings

```js
console.log('willian' + 'soncini')
// willian soncini
console.log('willian' + 1)
// willian1
```

#### Adição e subtração

```js
console.log(10 + 10)
//20
console.log('10' + 10)
// 20 Ele faz algumas conversões sozinho
console.log(20 - 10)
// 10
console.log('10' - 10)
// 0 Conversão novamente
```

#### Potenciação

```js
console.log(2**2)
// 4
```

#### Resto da divisão

```js
console.log(10 % 3)
// 1
```

#### Incremento decremento

```js
let num = 10
num++ // 11
num-- // 9
++num // 11
--num // 9
num = num + 10 // 20
num += 10 // 20
num = num - 10 // 0
num -= 10 // 0


num *= 10 // 100
num **= 2 // 10000
```

> NaN = not a number

### Conversão de tipo de dados

```js
parseInt('5') //number
// 5
parseInt('5.2') //number
// 5 - Remove a casa decimal
parseFloat('5.2') //number
// 5.2

// Melhor maneira
Number('5') //number
5
Number('5.2') //number
5.2
```
