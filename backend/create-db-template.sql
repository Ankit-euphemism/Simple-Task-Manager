CREATE DATABASE IF NOT EXISTS taskmanager;

use taskmanager;

create table if not exists tasks(
    id int primary key auto_increment,
    title varchar(255),
    completed bool default false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from tasks;

describe tasks;