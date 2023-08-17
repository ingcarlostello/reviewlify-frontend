import { useContext } from 'react';

// @Context
import { AuthContext } from '@/context/AuthContext';

const useAuthContext = () => {
    return useContext(AuthContext)
};

export default useAuthContext;