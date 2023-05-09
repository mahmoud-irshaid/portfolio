interface Children {
	_key: string;
	_type: string;
	marks: any[];
	text?: string;
	children?: Children[];
}

export interface BlockContent {
	_key: string;
	_type: 'block';
	children: Children[];
	markDefs: any[];
	style: string;
}
