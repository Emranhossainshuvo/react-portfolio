
const Banner = () => {
    return (
        <>
            <div className="flex flex-row-reverse items-center justify-around w-full">
                <div>
                    <p>Hi, I'm Md. Emran Hossain</p>
                    <h2>I am a Web developer</h2>
                    <p>I love creatig functioal web application</p>
                    <ul className="flex gap-5">
                        <li><img src="https://i.ibb.co/Dr3mG7k/icons8-github-24.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/JCGg4V3/icons8-linkedin-24.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/SPNWjBz/icons8-twitterx-24.png" alt="" /></li>
                        <li><img src="https://i.ibb.co/YtXvJs0/icons8-whatsapp-24.png" alt="" /></li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <img src="https://i.ibb.co/9VtwWnR/IMG-20231209-080753-removebg-removebg-preview.png" alt="" />
                </div>
            </div>           
        </>
    );
};

export default Banner;