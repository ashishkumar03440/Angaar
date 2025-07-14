import React from "react";

function Child({user_for_child}) {
    return (
        <div className="border-1-4 border-blue-300 pl-4 mb-4">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Child components </h2>
            <p className="text-sm text-grey-700 mt-2"></p>
            <strong>Name:</strong >{user_for_child.name}<br/>
            <strong>Email:</strong >{user_for_child.email}<br/>
            <strong>Role:</strong >{user_for_child.role}


        </div>
    )
}
export default Child;