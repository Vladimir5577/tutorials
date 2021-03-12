interface Rect {
	readonly id: string;
	color?: string;
	size: {
		width: number;
		height: number;
	}
}

const rect1: Rect = {
	id: '123',
	size: {
		width: 20,
		height: 30
	},
	color: 'red'
};

const rect2: Rect = {
	id: '132',
	size: {
		width: 10,
		height: 5
	}
};

rect2.color = 'green';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ==============================
interface RectWithArea extends Rect {
	getArea: () => number;
}

const react5: RectWithArea = {
	id: '345',
	size: {
		width: 20,
		height: 20
	},
	getArea(): number {
		return this.size.width * this.size.height;
	}
}

// ===============================

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();

	setTime(date: Date): void {
		this.time = date;
	}
}

// ==================================

interface Style {
	[key: string]: string;
}

const css: Style = {
	border: '1px solid black',
	margin: '2px',
	padding: '3px'
}