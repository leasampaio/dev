select cervejas.palavra
	from (
		select 
			unnest (string_to_array(name, ' ')) as palavra, count(*) 
		from
			cervejas 
		group by 
			palavra
		order by count(*) desc) as cervejas 
inner join (select *
from (
	select unnest (string_to_array(name, ' ')) as palavra, count(*) 
	from cervejarias 
	group by palavra
	order by count(*) desc) cervejarias ) as cervejarias 
on cervejarias.palavra = cervejas.palavra;