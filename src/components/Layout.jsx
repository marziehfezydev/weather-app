import bgImage from "../assets/images/bg-weather.jpeg";

export default function Layout({ children }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >

            <div className="absolute inset-0 bg-black/35"></div>

            <div className="relative z-10">
                {children}
            </div>

        </div>
    );
}