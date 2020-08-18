select 
	unnest (string_to_array(casting, ',') ) as elenco,count(*) 
from 
	netflix
group by elenco
order by count(*) desc
limit 10;