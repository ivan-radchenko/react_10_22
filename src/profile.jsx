import React from 'react';
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
    const {showName} = useSelector((store) => store.profileCheck);
    const dispatch = useDispatch();
    const setShowName = () => {
        dispatch({type:'CHECKBOX'});
    };

    return(
        <div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={showName}
                    value={showName}
                    onChange={setShowName}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check</label>
            </div>
        </div>
    )
}

export default Profile;