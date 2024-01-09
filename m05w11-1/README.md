# M05W11 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions AVG, MIN, MAX, SUM
- [x] `LIMIT` and `OFFSET`

### Database
* collection of tables
* table is a grouping of rows and columns

|ID|Food Item|Price|Calories|
|---|---|---|---|
|1|Big Mac|$4.99|750|
|2|Large Fries|$2.99|1000|

* rows => records
* columns => fields

### Relational Databases
* each table is related to one or more other tables

### Primary Key
* unique identifier
* number autoincrementing
* foreign key => one table's primary key stored in another table

const urls = {
  shortUrl: {
    longUrl: 'http:///',
    userId: 'b2xVn2'
  }
}

### RDBMS
* Relational DataBase Management System/Server

client <====tcp/http=====> express server <=======tcp/mysql========> rdbms
























### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < 'Jan 9, 2024';

SELECT *, NOW()
FROM users
WHERE country = 'Canada' AND payment_due_date < NOW();

SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;

SELECT *
FROM songs
JOIN albums ON albums.id = songs.album_id;
```

7. List all albums along with how many songs each album has

```sql
SELECT album_name, COUNT(songs.*) AS num_songs
FROM songs
JOIN albums ON albums.id = songs.album_id
GROUP BY album_name;
```

8. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, COUNT(songs.*) AS num_songs
FROM songs
JOIN albums ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.*) > 10;
```

9. List ALL albums in the database, along with their songs if any

```sql
SELECT *
FROM albums
-- more comments
LEFT JOIN songs ON albums.id = songs.album_id; -- this joins the tables together

-- this is a comment

SELECT *
FROM songs
RIGHT JOIN albums ON albums.id = songs.album_id;
```

10. List ONLY the first 10 songs from the songs table (LIMIT and OFFSET)

```sql
SELECT *
FROM songs
OFFSET 20 LIMIT 10;
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
