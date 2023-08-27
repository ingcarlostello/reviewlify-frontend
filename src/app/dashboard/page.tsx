"use client"
import {useSession} from "next-auth/react" 

const Dashboard = () => {

    const {data, status} = useSession()

    console.log(data, status);
    


    return (
        <div>
            dashboard
        </div>
    );
};

export default Dashboard;