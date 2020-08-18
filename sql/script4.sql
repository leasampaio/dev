select *
from (
	select birth_country ,count(*) 
	from nobel
	group by birth_country
	order by count (*) desc) as nasc
	where count between 10 and 50 ;