import React from "react";


function TableData (props) {
    return(
        <tbody>

        {props.users.map(({login, name, picture, phone, email}) => {
            return (
                <tr  key= {login.uuid}>  
                <td>
                    <img  alt= {"image for " + name.first + "" + name.last} src = {picture.medium} />
                </td>
                <td>{name.first} {name.last}</td>
                <td>{phone}</td>
                <td>{email}</td>
                </tr>

            )
        })}

        </tbody>
    )


}

export default TableData