SELECT * FROM labook_posts;

CREATE TABLE user_friendship (
    id_user VARCHAR(255),
    id_friend VARCHAR(255),
    FOREIGN KEY (id_user) REFERENCES labook_users (id),
    FOREIGN KEY (id_friend) REFERENCES labook_users (id)
)