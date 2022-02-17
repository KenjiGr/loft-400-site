import React from "react";

function InfoCard({title, secondary, description}){
    return(
        <div className="flex flex-col bg-white p-3 ">
            <div>
                <h1 className="underline underline-offset-4 decoration-theme text-black">{title}</h1>

            </div>
            <div>
                <h2 className="text-secondary">{secondary}</h2>
                <p className="text-black">{description}</p>
            </div>
        </div>
    )
}

export default InfoCard