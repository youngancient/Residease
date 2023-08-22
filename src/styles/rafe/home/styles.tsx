interface SectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
	return (
		<section {...props} className={`container p-2 mx-auto ${className}`}>
			{children}
		</section>
	);
}

interface TypographyProps extends React.HTMLProps<HTMLElement> {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	color?: string;
	className?: string;
}

export function Typography({
	variant,
	color = "",
	className = "",
	children,
	...props
}: TypographyProps) {
	let Component: any;

	switch (variant) {
		case "h1":
			Component = "h1";
			className += " text-4xl font-bold";
			break;
		case "h2":
			Component = "h2";
			className += " text-3xl font-semibold";
			break;
		case "h3":
			Component = "h3";
			className += " text-2xl font-medium";
			break;
		case "h4":
			Component = "h4";
			className += " text-xl font-medium";
			break;
		case "h5":
			Component = "h5";
			className += " text-lg font-medium";
			break;
		case "h6":
			Component = "h6";
			className += " text-base font-medium";
			break;
		case "p":
		default:
			Component = "p";
			className += " text-base";
			break;
	}

	const classNames = `${color} ${className}`;

	return (
		<Component className={classNames} {...props}>
			{children}
		</Component>
	);
}
