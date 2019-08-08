CREATE TABLE mst
    ([name] char(15), [hobi] char(15))
;

insert into mst ([name], [hobi]) values
	('Satria', 'Dancer'),
	('Juli', 'Actress'),
	('Mario', 'Actress'),
	('Memet', 'Salesman'),
	('Alan', 'Photographer'),
	('Kiky', 'Photographer'),
	('Chacha', 'Photographer'),
	('Joko', 'Actress'),
	('Juni', 'Dancer'),
	('Putra', 'Salesman');


---------------------------------------------------------------------


DECLARE @cols AS NVARCHAR(MAX)
DECLARE @query AS NVARCHAR(MAX)

SELECT @cols = STUFF((SELECT DISTINCT ', ' + QUOTENAME(hobi)
                       FROM mst
                       FOR XML PATH(''), TYPE
                      ).value('.', 'NVARCHAR(MAX)'), 1, 1, '')

set @query = 'select ' + @cols +  ' from (
  select
    hobi, name, row_number() over (partition by [hobi] ORDER BY [name]) as rn
  from mst
) src
pivot(
  MAX([name])
  for [hobi] in (' + @cols + ')
) result'

execute(@query);
