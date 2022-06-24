
import { useSelector } from 'react-redux';

export const UserData = () => {
    const userSignin = useSelector((state: any) => state.userSignIn);
    const { userInfo } = userSignin;
    var data;
    if (userInfo) {
        let { full_name, email, phone, country, occupation, verify, areaOfInterest, createdAt } = userInfo;
        data = {
            full_name, email, phone, country, occupation, verify, areaOfInterest, createdAt
        }
        return data;

    } else {
        return data
    }

} 
