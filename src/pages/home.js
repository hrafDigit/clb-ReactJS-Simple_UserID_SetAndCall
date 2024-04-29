const DisplayData = ({ data }) => {
	return (
		<>
			<p>Je m'appelle {data.name}</p>
			<p>et mon adresse email est {data.email}</p>
		</>
	);
};

export default DisplayData;