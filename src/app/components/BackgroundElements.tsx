const BackgroundElements = () => {
    return (
        <div>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pink-500 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
            <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-pink-400 opacity-20 blur-xl"></div>
            <div className="absolute top-1/3 left-1/2 w-16 h-16 rounded-full bg-purple-300 opacity-20 blur-lg"></div>

            <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"></div>
        </div>
    )
}

export default BackgroundElements