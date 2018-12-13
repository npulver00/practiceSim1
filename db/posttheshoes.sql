insert into shoes(name, price, image)
values(${name}, ${price}, ${image})
returning *;