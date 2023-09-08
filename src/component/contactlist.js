// import React from "react";

// const Contactlist = (props) => {

//     const renderContactlist = props.contacts.map((contact) => {
//         return(
//             <div>
//                 <div>
//                     <div>{contact.name}</div>
//                     <div>{contact.email}</div>
//                     <div>icon</div>
//                 </div>
//             </div>
//         );
//     });
//     return(
//         <div>
//             <h2>{renderContactlist}</h2>
//         </div>
//     );

// };

// export default Contactlist;



import React from "react";
import Card from "./contactcard";

const Contactlist = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactlist = props.contacts.map((contact) => {
        return (
            <Card contact={contact} clickHandler={deleteContactHandler} key={contact.id}></Card>
        );
    });

    return (
        <div>
            {renderContactlist}
        </div>
    );
};

export default Contactlist;

