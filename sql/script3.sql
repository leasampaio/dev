select name, category, year from  times 
where category in (
	select category 
	from (
		select category ,count(category )
		from times
		group by category 
		order by count(category ) desc ) as honras
	where count between 3 and 6
	limit 2
	)
;