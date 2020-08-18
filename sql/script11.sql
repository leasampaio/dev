select count (*)
from (
	select unnest (string_to_array(name, ' ')) as palavra, count(*) 
	from cervejarias 
	group by palavra
	order by count(*) desc) cervejarias 
where count = 1 

	
;