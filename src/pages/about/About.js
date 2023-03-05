import Navbar from '../../components/navbar/Navbar';

const About = () => {
    return <>
        <Navbar title="About" />
        <div className="w-2/4 mx-auto my-[50px]">
            <h2 className="text-4xl capitalize">About me</h2>
            <p className="mt-4 text-slate-600 text-2xl capitalize">
                i'm abobaker hilal front-end developer by using reactjs
            </p>
        </div>
    </>;
};

export default About;
