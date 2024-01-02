
const Banner = () => {
    return (
        <div className="md:pt-20">
            <div className="hero h-[450px] md:h-[400px] lg:h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/qR5LTNS/banner.jpg)', }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl text-white font-bold"> Your Next-Level Contacts Manager</h1>
                        <p className="mb-5 text-white font-bold">Welcome to Contact Hub, your next-level contacts manager, designed to revolutionize the way you navigate and cultivate your network. With cutting-edge features and a user-centric approach</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;