export type statusColorSelectorType =
	| "primary"
	| "secondary"
	| "open"
	| "ongoing"
	| "done"
	| "pending"
	| "uncompleted"
	| "overdue"
	| "overdue-response"
	| "overdue-resolve"
	| "completed"
	| "event"
	| "scheduled event"
	| "stored"
	| "close"
	| "missing"
	| "preventive"
	| "corrective"
	| "on_repair"
	| "broken"
	| "retired"
	| "stored"
	| "in_use";

export const status_color_selector_init = {
	primary: "#1e0068",
	secondary: "#0450ee",
	open: "#096fce",
	ongoing: "#c2c2c8",
	done: "#0450ee",
	pending: "#ce7f09",
	completed: "#1e0068",
	uncompleted: "#ce0909",
	overdue: "#6a0404",
	"overdue-response": "#ce0909",
	"overdue-resolve": "#ce0909",
	event: "#1e0068",
	"scheduled event": "#0450ee",
	stored: "#C2C2C8",
	close: "#1E0068",
	missing: "#CE0909",
	preventive: "#0450EE",
	corrective: "#1E0068",
	in_use: "#096FCE",
	on_repair: "#C2C2C8",
	broken: "#1E0068",
	retired: "#CE0909",
	"On Repair": "#C2C2C8",
	Retired: "#CE0909",
	"In Use": "#096FCE",
	Stored: "#0450EE",
	Broken: "#1E0068",
};
