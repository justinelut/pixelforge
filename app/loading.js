export default function Loading() {
    return (
        <div className="w-full h-full fixed block top-0 left-0 bg-secondary opacity-100 z-50">
            <span className="text-green-500 opacity-75 top-1/2 left-1/2 my-0 mx-auto block relative w-0 h-0" style={{ transform: 'translate(-50%, -50%)' }}>
                <i className="fas fa-circle-notch fa-spin fa-5x"></i>
                <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
            </span>
        </div>

    )
}
