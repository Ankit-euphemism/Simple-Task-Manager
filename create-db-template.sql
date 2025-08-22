
use taskmanager;

create table tasks(
    id int primary key auto_increment,
    title varchar(255),
    completed bool default false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from tasks;

describe tasks;