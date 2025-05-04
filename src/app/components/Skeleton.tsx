const Skeleton = () => {
    return (
        <div className="flex items-center space-x-2 animate-pulse w-md">
            <div className="w-8 h-8 bg-white/20 rounded-full" />
            <div className="flex flex-col space-y-2">
                <div className="w-40 h-3 bg-white/20 rounded" />
                <div className="w-32 h-3 bg-white/20 rounded" />
            </div>
        </div>
    )
}

export default Skeleton