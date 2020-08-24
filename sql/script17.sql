select name, country 
from (
	select 
		unnest (string_to_array(casting, ',') ) as name, count(*) 
	from 
		netflix
	group by name
	order by count(*) desc
	limit 10
	)as atores
	; 