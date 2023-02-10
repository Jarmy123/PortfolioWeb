import React from 'react';

type Props = {
	title: string;
};

const SectionTitle = (props: Props) => {
	const { title } = props;
	return (
		<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
			{title}
		</h3>
	);
};

export default SectionTitle;
