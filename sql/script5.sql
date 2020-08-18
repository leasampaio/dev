select prize_share 
from (
	select prize_share, count(prize_share) 
	from nobel
	group by prize_share
	order by count(prize_share )  )as compart
;