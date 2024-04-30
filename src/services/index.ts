import { Auth } from './auth';
import { Course } from './course';
import { Post } from './post';

export const Service = {
	Auth: new Auth(),
	Post: new Post(),
	Course: new Course(),
};
