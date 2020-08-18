select *
from (
	select 
		unnest (string_to_array(casting, ',') ) as elenco,count(*) 
	from 
		netflix
	group by elenco
	order by count(*) desc
	limit 10
	)as atores
where atores.count between 10 and 30 and not ( atores.count between 15 and 20)
	; 