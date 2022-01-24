insert into
  "Users" (
    username,
    email,
    password,
    "createdAt",
    "updatedAt"
  )
values
  ('noam', 'noam@gmail.com', '123456', now(), now());
select
  *
from
  "Resources";
select
  *
from
  "Resources" r
  join (
    select
      recourse_id,
      avg(length) avg_length
    from
      "ResourceLengthSuggestions" rls
    group by
      rls.recourse_id
  ) as rl on rl.recourse_id = r.id
  join (
    select
      recourse_id,
      max(name) name
    from
      "ResourceNameSuggestions" rns
    group by
      rns.recourse_id
  ) as rn on rn.recourse_id = r.id;
select
  recourse_id,
  type_name
from
  () as rts
group by
  rts.recourse_id;
select
  recourse_id,
  max(count)
from
  (
    select
      recourse_id,
      type_name,
    from
      "ResourceTypeSuggestions" rts
    group by
      rts.recourse_id,
      rts.type_name
  ) as rts
group by
  rts.recourse_id;
select
  recourse_id,
  type_name,
  RANK () OVER (
    PARTITION BY recourse_id,
    type_name
    ORDER BY
      count(*) DESC
  ) votes
from
  "ResourceTypeSuggestions";
create view rrr as
SELECT
  recourse_id,
  type_name,
  Count(*)
FROM
  "ResourceTypeSuggestions" rts
GROUP BY
  rts.recourse_id,
  rts.type_name;
SELECT
  a.recourse_id,
  b.type_name
FROM
  (
    SELECT
      rts.recourse_id,
      Max(rts.count) AS max_count
    FROM
      rrr AS rts
    GROUP BY
      rts.recourse_id
  ) a
  INNER JOIN rrr AS b ON a.recourse_id = b.recourse_id
  AND a.max_count = b.count;