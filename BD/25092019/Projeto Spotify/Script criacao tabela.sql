SELECT * 
from artista a, genero g, artista_genero a_g
WHERE a.id = a_g.id_artista
AND g.id= a_g.id_genero;