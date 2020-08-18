select category ,count(category )
from times
group by category 
order by count(category ) desc ;