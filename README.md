<h1 align="center">
  <img src="./public/images/template.png" width="120px">
  <br />
  Gerador de certificados
</h1>


## Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Handlebars](https://handlebarsjs.com/)
- [Puppeteer](https://pptr.dev/)


## Projeto

Este é um projeto é um gerador automático de certificados.


## Layout

Você pode visualizar o layout do certificado através do link abaixo:

- [Layout](https://github.com/mateusleiteaalmeida/desafio-node-gerador-de-certificados/blob/main/public/images/template.png)

## Iniciando

Para gerar um certificado é necessário informar os seguintes dados: 
- Nome do aluno
- Horas cursadas
- Nome do curso
- Professor
- Instituição de ensino
- Data

Rota: https://gerador-de-certificados.herokuapp.com/certificado<br />
Método: POST

Informar os dados no seguinte formato JSON:

{<br />
&nbsp;&nbsp;"name": "Nome do aluno",<br />
&nbsp;&nbsp;"hours": Número,<br />
&nbsp;&nbsp;"course": "Título do curso",<br />
&nbsp;&nbsp;"professor": "Professor",<br />
&nbsp;&nbsp;"school": "Instituição de ensino",<br />
&nbsp;&nbsp;"date": "Data"<br />
}<br />

Em caso de sucesso, será gerado um pdf com o certificado com os dados inseridos.

Em caso de falha, será retornada uma mensagem no seguinte formato:

{<br />
&nbsp;&nbsp;"message": "É necessário inserir o nome do aluno"<br />
}<br />


---

Projeto elaborado por [Christiano Milfont](https://github.com/cmilfont)