import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Reminder() {
    return (
        <Card className="w-full max-w-4xl mx-auto bg-amber-50 border-amber-100">
            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Save the date(s). Get £5.</h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl">
                            Add 3 occasion reminders to unlock £5 credit. And we'll send you a friendly nudge when they're coming up,
                            too.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Button
                            size="lg"
                            className="w-full md:w-auto bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 text-base font-medium"
                        >
                            Add a reminder
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}