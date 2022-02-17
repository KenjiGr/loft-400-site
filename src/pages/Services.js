import React from "react";
import InfoCard from "../components/InfoCard";

function Services(){
    return (
        <div className="flex flex-row space-x-4 mx-auto">
            <InfoCard title={'Services'} secondary={''} description={''}/>
            <img src="" alt="" className=""/>
            <InfoCard title={'Services'} secondary={'Haircuts'} description={''}/>
            <img src="" alt=""/>
            <InfoCard title={'Services'} secondary={''} description={''}/>
            <img src="" alt=""/>
            <InfoCard title={'Services'} secondary={'Beard Shaving'} description={''}/>
            <img src="" alt=""/>
        </div>
    )
}

export default Services