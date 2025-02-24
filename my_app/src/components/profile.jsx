import React, {useState} from 'react';

const Profile = () => {
    const [name, setName] = useState("Habiba Halkano");
    const [email, setEmail] = useState("habiba@example.com");

    return (
        <div className="bg-blue-600 text-white py-4 text-center text-2xl font-bold">
            <h1 className="text-xl font-bold text-gray-800">Profile</h1>
            <p className="text-gray-600 mt-2">Name: {name}</p>
            <p className="text-gray-600">Email: {email}</p>

            <div className="mt-4">
               <input
                    type="text"
                    placeholder="Enter new name"
                    className="border px-2 py-1 w-full mb-2"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="email"
                    placeholder="Enter new email"
                    className="border px-2 py-1 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
        </div>
    );
}

export default Profile;