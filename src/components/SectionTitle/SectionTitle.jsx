const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 my-8">
            <p className="text-yellow-600 text-center mb-2">--- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 text-center">{heading}</h3>            
        </div>
    );
};

export default SectionTitle;