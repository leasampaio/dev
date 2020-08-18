select category, count(*) from nobel 
where prize_share = (
	select prize_share 
	from nobel
	group by prize_share
	order by count(prize_share ) asc limit 1) 
group by category
order by count(*) desc;


