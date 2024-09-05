USE db_todolist;

CREATE TABLE tasks(
    id INT(3) NOT NULL AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY(id)
)