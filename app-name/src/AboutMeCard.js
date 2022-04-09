import React from 'react'

export default function AboutMeCard({ open }) {
    console.log(open)
    if (!open) { return null }
    else {
        return (
            <div>AboutMeCard</div>
        )
    }
}
