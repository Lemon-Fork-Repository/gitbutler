import { Type } from 'class-transformer';
import 'reflect-metadata';

class DndItem {
	id!: string;
}

export class Hunk extends DndItem {
	name!: string;
	diff!: string;
	modifiedAt!: Date;
	filePath!: string;
}

export class File extends DndItem {
	path!: string;
	@Type(() => Hunk)
	hunks!: Hunk[];
}

export class Branch extends DndItem {
	name!: string;
	active!: boolean;
	@Type(() => File)
	files!: File[];
	description!: string;
}