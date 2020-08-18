select 
	unnest (string_to_array(casting, ',') ) as elenco
from 
	netflix
group by elenco ;