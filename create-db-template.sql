<<<<<<< HEAD

use taskmanager;

create table tasks(
    id int primary key auto_increment,
    title varchar(255),
    completed bool default false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from tasks;

=======

use taskmanager;

create table tasks(
    id int primary key auto_increment,
    title varchar(255),
    completed bool default false,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from tasks;

>>>>>>> f1ea9143b0b6eda64ff87e8b7b2704192c6b5400
describe tasks;