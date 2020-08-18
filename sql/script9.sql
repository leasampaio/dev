select unnest (string_to_array(name, ' ')) as palavra, count(*) 
from cervejarias
group by palavra
limit 4;