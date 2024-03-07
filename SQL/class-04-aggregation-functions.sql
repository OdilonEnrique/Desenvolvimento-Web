SELECT * FROM orders;

SELECT * FROM orders ORDER BY pais;

SELECT DISTINCT pais FROM orders ORDER BY pais;

SELECT DISTINCT segmento FROM orders ORDER BY categoria;

SELECT DISTINCT categoria FROM orders ORDER BY categoria;

SELECT * FROM orders WHERE pais LIKE '%ia';
SELECT * FROM orders WHERE pais LIKE 'ar%';
SELECT * FROM orders WHERE pais LIKE '%ar%' OR pais LIKE 'brazil';
SELECT * FROM orders WHERE pais LIKE '_ar%';
SELECT * FROM orders WHERE regiao LIKE 'par%';

SELECT * FROM orders WHERE pais IN ('Brazil', 'Argentina');

SELECT * FROM orders WHERE total_vendas BETWEEN 500 AND 1000;

SELECT 
    COUNT(*) AS QTD,
    ROUND(SUM(total_vendas), 2) AS TOTAL,
    ROUND(MIN(total_vendas), 2) AS MIN_VENDAS,
    ROUND(MAX(total_vendas), 2) AS MIN_VENDAS,
    ROUND(AVG(total_vendas), 2) AS MIN_VENDAS
FROM orders 
WHERE pais = 'Brazil';

SELECT pais, ROUND(SUM(total_vendas)) AS TOTAL
FROM orders 
GROUP BY pais
ORDER BY TOTAL DESC LIMIT 10;

SELECT COUNT(id_pedido) FROM orders GROUP BY id_pedido;

SELECT id_pedido, COUNT(id_pedido) FROM orders GROUP BY id_pedido;

SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';