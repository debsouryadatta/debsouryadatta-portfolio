import React from 'react'
import { Card } from '../card'

export default function Studies() {
    return (
        <div>
            <Card>
                <div className="p-8 w-[80vw]">
                    <h3 className="text-2xl font-bold text-zinc-100 mb-4">Studies</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl text-zinc-100">National Institute of Technology Agartala</h4>
                            <p className="text-zinc-400">B.Tech • Electrical Engineering • 2021-2025</p>
                            {/* <p className="text-zinc-300 mt-2">Relevant coursework or achievements</p> */}
                        </div>
                        {/* Add more education items as needed */}
                    </div>
                </div>
            </Card>
        </div>
    )
}
