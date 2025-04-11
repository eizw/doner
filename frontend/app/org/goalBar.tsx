export default function GoalBar({ value, max 
}: {
    value: number,
    max: number,
}) {
    return (
        <div 
            id="bar" 
            className="bg-gray-50 w-full h-5 rounded-lg"
        >
            <div 
                id="progress"
                style={{ ['width' as any]: `${Math.min(value / max * 100, 100)}%` }}
                className="bg-black h-5 rounded-lg"
            >
            </div>
        </div>
    )
}