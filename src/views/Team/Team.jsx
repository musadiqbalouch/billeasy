import React from 'react'

const Team = () => {
    const items = [
        "Set smart reminders for due, overdue, or partial payments.", "Auto-generate invoices from approved estimates or templates",
        "Schedule recurring invoices and auto-apply taxes or late fees", "Reduce human error and get paid faster with less follow-up."
    ]
    return (
        <div>
            {items.map((item, index) => (
                <div className='flex xl:flex  ' key={index}>
                    <div className='h-4 w-4 shrink-0 bg-[linear-gradient(to_right,rgba(12,113,224,1),rgba(7,62,112,1))] border border-white rounded-full mt-2 mr-3 xl:h-4 xl:w-4 xl:shrink-0 xl:mt-2 xl:mr-3'></div>
                    <div className='text-[rgba(255,255,255,1)] text-xs text-start sm:mt-1.5 sm:text-sm md:text-base md:mt-1  xl:text-lg'>{item} </div>
                </div>
            ))}

        </div>
    )
}

export default Team
{
    selectbutton === "Automated Invoice Management" ? (
        <>
            <h2>musadiq1</h2>
        </>
    ) : selectbutton === "Payment Insights" ? (
        <>
            <h3>musadiq</h3>
        </>
    ) : ""
}

import Automated from '../Automated/Automated';
import Payment from '../Payment/Payment';
import Integrated from '../Integrated/Integrated';
import Team from '../Team/Team';
