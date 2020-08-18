select full_name, category, year from nobel 
where prize_share = (
	select prize_share 
	from nobel
	group by prize_share
	order by count(prize_share ) asc limit 1) 
limit 5
;


