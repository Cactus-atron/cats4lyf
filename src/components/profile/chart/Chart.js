import React from 'react'
import { ResponsiveContainer, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    Radar, 
    PolarRadiusAxis
} from 'recharts'

export const Chart = (props) => {
    const data = [
        {
            attribute: 'Adaptability',
            value: props.breed.adaptability
        },
        {
            attribute: 'Affection',
            value: props.breed.affection_level
        },
        {
            attribute: 'Children',
            value: props.breed.child_friendly
        },
        {
            attribute: 'Dogs',
            value: props.breed.dog_friendly
        },
        {
            attribute: 'Energy Level',
            value: props.breed.energy_level
        },
        {
            attribute: 'Grooming Needs',
            value: props.breed.grooming
        },
        {
            attribute: 'Health Issues',
            value: props.breed.health_issues
        },
        {
            attribute: 'Intelligence',
            value: props.breed.intelligence
        },
        {
            attribute: 'Shedding',
            value: props.breed.shedding_level
        },
        {
            attribute: 'Social Needs',
            value: props.breed.social_needs
        },
        {
            attribute: 'Strangers',
            value: props.breed.stranger_friendly
        },
        {
            attribute: 'Vocalisation',
            value: props.breed.vocalisation
        }
    ]

    return (
        <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="attribute" />
            <PolarRadiusAxis domain={[0, 5]} />
            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
}