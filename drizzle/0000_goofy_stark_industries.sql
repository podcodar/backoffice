CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
