import React from 'react';

type GoogleIconProps = React.SVGProps<SVGSVGElement>;

const GoogleIcon: React.FC<GoogleIconProps> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 19 20"
			className={className}
			{...props}
		>
			<path d="M18.832 8.288c.113.638.169 1.284.168 1.93 0 2.891-1.054 5.335-2.888 6.989h.002C14.51 18.659 12.306 19.5 9.691 19.5c-2.57 0-5.035-1-6.852-2.782A9.405 9.405 0 010 10a9.405 9.405 0 012.839-6.717A9.791 9.791 0 019.69.501a9.42 9.42 0 016.484 2.472l-2.767 2.712A5.325 5.325 0 009.691 4.26c-2.528 0-4.676 1.672-5.441 3.924a5.584 5.584 0 000 3.637h.003c.77 2.248 2.914 3.92 5.442 3.92 1.306 0 2.428-.328 3.297-.908h-.003a4.441 4.441 0 001.27-1.249 4.35 4.35 0 00.667-1.637H9.691V8.289h9.14v-.001z"></path>
		</svg>
	);
};

export default GoogleIcon;
