import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            className="drop-shadow-md"
            subHeading={"check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-gradient-to-b from-transparent to-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 21, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p className="drop-shadow-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit reprehenderit ratione alias doloremque, quia adipisci veniam. Aspernatur nihil natus laborum perspiciatis odit numquam, ad modi accusamus placeat totam praesentium corporis eum molestias in. Reiciendis, est amet id voluptas aperiam natus debitis, architecto ab aliquid iste qui ipsam consequatur nostrum.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;