Teste Node.js Back-end.

url da aplicação: http://18.230.108.135/universities

* Query params:

- Retorna todas as universidades por pais:
Ex: http://18.230.108.135/universities?country=brazil

- Retorna as universidades de todos os paises, porém, em páginas de 20 itens:
Ex: http://18.230.108.135/universities?page=NUMERO-DA-PAGINA (Ex: 1, 2, 3...)

- Retorna todas as universidades de um determinado país em páginas de 20 itens:
Ex: http://18.230.108.135/universities?country=brazil&page=1


* Rotas:

- GET (sem parâmetros), retorna todas as universidades em uma única página:
Ex: http://18.230.108.135/universities

- GET (params: country), retorna todas as universidades de um país em uma única página:
Ex: http://18.230.108.135/universities?country=chile

- GET/:id, retorna a universidade compatível com o id inserido:
Ex: http://18.230.108.135/universities/62c718b9387029f996bbf5a9

- POST: 
Ex: body: {
		"name": "Universidade 1",
		"domains": ["dominio1", "dominio2", "dominio..."],
		"web_pages": ["web1, web2", "web..."],
		"country": "Brazil",
		"state-province": "Distrito Federal",
	  "alpha_two_code": "BR"
	}
  
 - PUT/:id :
 Ex: http://18.230.108.135/universities/62c718b9387029f996bbf5a9
 Ex: body: {
		"name": "Universidade 2",
		"domains": ["dominio1", "dominio2", "dominio..."],
		"web_pages": ["web1, web2", "web..."],
	}
 
 - DELETE/:id :
 Ex: http://18.230.108.135/universities/62c718b9387029f996bbf5a9


* Recursos EXTRAS:

- Se estiver usando o parâmetro de PAGE, caso tenha preferência, utilize juntamente com ele o LIMIT. Ele altera o limite que pode ser exibido por página (20 por padrão):
Ex: http://18.230.108.135/universities?country=brazil&page=1&limit=10

- Atualização automatica do banco de dados com a API:
Para atualizar o banco de dados em futuras implementações na API disponibilizada, foi aplicado um "cronômetro". A intenção dele é realizar a comparação das informações obtidas na API com as que já estão incluidas no banco de dados. Caso alguma nova universidade seja implementada na API, em alguns dos 3 horários programados, realizaram a inserção dessa nova informação no db. 

