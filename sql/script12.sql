select count (*)
from (
	select unnest (string_to_array(name, ' ')) as palavra, count(*) 
	from cervejas 
	group by palavra
	order by count(*) desc) cervejas 
where count = 1 

	
;